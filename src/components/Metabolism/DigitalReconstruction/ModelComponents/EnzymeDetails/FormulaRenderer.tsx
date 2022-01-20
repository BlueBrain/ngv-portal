import React from 'react';

import Latex from 'react-latex';

import 'katex/dist/katex.min.css';

type FormulaRendererProps = {
  formula: string;
}

const pruneFormula = (rawFormula: string) => {
  const changedFormula = rawFormula
    .replaceAll('_', '\\_');
  
  return `$${changedFormula}$`;
};

const FormulaRenderer: React.FC<FormulaRendererProps> = ({formula}) => {
  return (
    <>
      <div>
        <code>
          <Latex>{pruneFormula(formula)}</Latex>
        </code>
      </div>
    </>
  );
}

export default FormulaRenderer;
