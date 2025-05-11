function initializeCutter() {
  const fileInput = document.getElementById('fileInput');
  const startMin = document.getElementById('startMin');
  const startSec = document.getElementById('startSec');
  const endMin = document.getElementById('endMin');
  const endSec = document.getElementById('endSec');
  const outputName = document.getElementById('outputName');
  const cutButton = document.getElementById('cutButton');
  const status = document.getElementById('status');

  let audioDuration = 0;
  let fileBlob = null;

  fileInput.value = '';
  outputName.value = 'cut.mp3';
  status.textContent = '';
  cutButton.disabled = true;

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    if (file.type !== 'audio/mpeg' && !file.name.toLowerCase().endsWith('.mp3')) {
      alert('Please select a valid MP3 file.');
      fileInput.value = '';
      return;
    }
    fileBlob = file;
    const audio = document.createElement('audio');
    audio.src = URL.createObjectURL(file);
    audio.addEventListener('loadedmetadata', () => {
      audioDuration = audio.duration;
      const mins = Math.floor(audioDuration / 60);
      const secs = Math.floor(audioDuration % 60).toString().padStart(2, '0');
      status.textContent = `Duration: ${mins}:${secs}`;
      cutButton.disabled = false;
    });
  });

  cutButton.addEventListener('click', () => {
    const start = parseInt(startMin.value) * 60 + parseInt(startSec.value);
    const end = parseInt(endMin.value) * 60 + parseInt(endSec.value);
    if (isNaN(start) || isNaN(end) || start >= end || end > audioDuration) {
      alert('Invalid time range.');
      return;
    }
    const fileSize = fileBlob.size;
    const startByte = Math.floor((start / audioDuration) * fileSize);
    const endByte = Math.floor((end / audioDuration) * fileSize);
    const sliced = fileBlob.slice(startByte, endByte);
    const blob = new Blob([sliced], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    let name = outputName.value.trim() || 'cut.mp3';
    if (!name.toLowerCase().endsWith('.mp3')) name += '.mp3';
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    status.textContent = `Generated file: ${name}`;
  });
}
