import React, { useState, useRef } from 'react';
import { words } from 'lodash';
import { useRouter } from 'next/router';
import { Form, Input, Button, Select } from 'antd';
import { GatewayOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';

import { feedbackUrl, deploymentUrl, isServer } from '../../config';

import styles from './styles.module.scss';


const { TextArea } = Input;
const { Option } = Select;

const FEEDBACK_CONTACT_KEY = 'feedbackContact';
const storage = isServer ? null : window.sessionStorage;


const Feedback: React.FC = () => {
  const router = useRouter()

  const [formVisible, setFormVisible] = useState(false);
  const issueSelectRef = useRef<HTMLSelectElement>(null);

  const [feedback, setFeedback] = useState('');
  const [contact, setContact] = useState(storage?.getItem(FEEDBACK_CONTACT_KEY) ?? '');

  const [sending, setSending] = useState(false);
  const [responseStatus, setResponseStatus] = useState<'success' | 'error'>(null)

  const onContactChange = (value: string) => {
    storage?.setItem(FEEDBACK_CONTACT_KEY, value);
    setContact(value);
  };

  const showForm = () => {
    setFormVisible(true);
    issueSelectRef?.current?.focus();
  };

  const closeForm = () => {
    setFormVisible(false);

    setTimeout(() => {
      setFeedback('');

      setResponseStatus(null);
    }, 200);
  }

  const sendFeedback = async () => {
    setResponseStatus(null)
    setSending(true);

    const pageUrl = `${deploymentUrl}${router.basePath}${router.asPath}`;

    const labels = ['User feedback'];

    try {
      const res = await fetch(`${feedbackUrl}/BlueBrain/ngv-portal`, {
        method: 'POST',
        body: JSON.stringify({
          labels,
          title: words(feedback).slice(0, 8).join(' '),
          body: [
            `Field | Element`,
            `--- | ---`,
            `Page URL | [${router.asPath}](${pageUrl})`,
            `Contact | ${contact || '--'}`,
            ``,
            `${feedback}`,
          ].join('\n'),
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        setResponseStatus('success');
        setTimeout(closeForm, 1000);
      } else setResponseStatus('error')

      setSending(false);
    } catch (e) {
      setResponseStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className={`${formVisible ? styles.formVisible : ''}`}>
      <div
        className={styles.feedbackButton}
        onClick={showForm}
      >
        Feedback
      </div>
      <div id="feedbackForm" className={styles.form}>
        <div className={styles.closeBtn}>
          <Button
            shape="circle"
            type="primary"
            danger
            icon={<CloseOutlined />}
            onClick={closeForm}
          />
        </div>
        <Form size="small" onSubmitCapture={sendFeedback}>
          <Form.Item>
            <TextArea
              placeholder="Tell us about your experience..."
              rows={4}
              disabled={sending}
              autoSize={{ minRows: 4, maxRows: 4 }}
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Contact name / email (optional)"
              prefix={<UserOutlined />}
              disabled={sending}
              value={contact}
              onChange={e => onContactChange(e.target.value)}
              onPressEnter={sendFeedback}
            />
          </Form.Item>
          <Form.Item className="text-right mb-0">
            {responseStatus === 'success' && (
              <span className="mr-1">Sent, thank you!</span>
            )}
            {responseStatus === 'error' && (
              <span className="mr-1 text-red">Oops, something went wrong</span>
            )}
            <Button
              className={styles.sendBtn}
              type="primary"
              danger
              disabled={!feedback || responseStatus === 'success'}
              loading={sending}
              onClick={sendFeedback}
            >
              {sending ? 'Sending' : 'Send'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};


export default Feedback;
