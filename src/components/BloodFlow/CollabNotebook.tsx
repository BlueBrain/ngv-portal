export default function CollabNotebook() {
  return (
    <>
      <p>
        You can run and modify the model using the following <a href="https://colab.research.google.com/drive/1y33LrTLkwIuq3oXHlCiBYWDd1EZSRsb5?hl=fr" target="_blank" rel="noreferrer">Google Collab Notebook</a>.
      </p>
      <p>
        First, you need a Google account to use Google Colab. <br />
        Second, you need to copy the notebook to your Google Drive (click on File -&gt; Save a copy in Drive). <br />
        Finally, please follow the instructions in the Google Colab Notebook to run it. Since the vasculature data is not public, the model here runs on a synthetic vasculature.
      </p>

      <p>
        You can also download the notebook from Google Colab to run it locally. <br />
        If you do so, you will need to git clone the Astrovascpy package here: <a href="https://github.com/BlueBrain/astrovascpy" target="_blank" rel="noreferrer"
        >https://github.com/BlueBrain/astrovascpy</a> and locally one can run <code>source setup.sh</code> to install the AstroVascPy solver (+ all its dependencies) and set the environment. <br />
        For the local installation (workstation), please install conda before running the command above. <br />
        Remark: Run this command every time before using the solver in order to set the environment correctly. <br />
        In brief, to find out how to run the model locally, follow the steps described in the <a href="https://github.com/BlueBrain/AstroVascPy/blob/main/README.md" target="_blank" rel="noreferrer"
        >README.md</a> file
      </p>
    </>
  );
}
