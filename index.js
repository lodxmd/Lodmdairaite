<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LOD-✗-MD Pair Code</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Anime+Ace&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
  <style>
    /* Existing styles remain unchanged */
    body {
      margin: 0;
      overflow: hidden;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Poppins', sans-serif;
      color: #fff;
      position: relative;
    }

    #canvas {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 2;
    }

    /* 3D Animation for the box */
    @keyframes float3D {
      0%, 100% { transform: translateZ(0) rotateX(0deg) rotateY(0deg); }
      50% { transform: translateZ(50px) rotateX(10deg) rotateY(10deg); }
    }

    @keyframes glow {
      0% { box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc; }
      50% { box-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff; }
      100% { box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc; }
    }

    .box {
      width: 350px;
      height: 450px;
      padding: 20px;
      text-align: center;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(30, 30, 30, 0.9));
      border-radius: 15px;
      border: 3px solid #00ffcc;
      animation: float3D 5s ease-in-out infinite, glow 3s infinite;
      box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
      transform-style: preserve-3d;
      position: relative;
      overflow: hidden;
    }

    .box::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(0, 255, 204, 0.2), transparent);
      transform: rotate(45deg);
      z-index: -1;
    }

    #text {
      color: #ffffff;
      font-family: 'Anime Ace', sans-serif;
    }

    .centered-text {
      color: #00ffcc;
      text-shadow: 0 0 10px #00ffcc, 0 0 20px #ff00ff;
      font-size: 24px;
      margin-bottom: 10px;
      transform: translateZ(20px);
    }

    h4 {
      color: #ff00ff;
      text-shadow: 0 0 5px #ff00ff;
      font-size: 16px;
      margin-bottom: 20px;
      transform: translateZ(15px);
    }

    .input-container {
      display: flex;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 1rem;
      padding: 0.3rem;
      gap: 0.3rem;
      max-width: 300px;
      width: 100%;
      box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
      transform: translateZ(10px);
      transition: transform 0.3s ease;
    }

    .input-container:hover {
      transform: translateZ(30px) scale(1.05);
      box-shadow: 0 0 20px rgba(0, 255, 204, 0.7);
    }

    .input-container input {
      border-radius: 0.8rem 0 0 0.8rem;
      background: #1a1a1a;
      width: 89%;
      flex-basis: 75%;
      padding: 1rem;
      border: none;
      border-left: 2px solid #00ffcc;
      color: #ecf0f1;
      transition: all 0.3s ease-in-out;
      font-family: 'Poppins', sans-serif;
    }

    .input-container input:focus {
      border-left: 2px solid #ff00ff;
      outline: none;
      box-shadow: 0 0 10px #ff00ff;
    }

    .input-container button {
      flex-basis: 50%;
      padding: 1rem;
      background: linear-gradient(135deg, #00ffcc, #ff00ff);
      font-weight: 900;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      color: #fff;
      border: none;
      width: 100%;
      border-radius: 0 1rem 1rem 0;
      transition: all 0.3s ease-in-out;
      font-family: 'Anime Ace', sans-serif;
    }

    .input-container button:hover {
      background: linear-gradient(135deg, #ff00ff, #00ffcc);
      box-shadow: 0 0 15px #ff00ff;
      transform: translateZ(20px);
    }

    #waiting-message {
      color: #ffffff;
      margin-top: 10px;
      transform: translateZ(10px);
    }

    @media (max-width: 850px) {
      .input-container {
        flex-direction: column;
      }

      .input-container input {
        border-radius: 0.8rem;
      }

      .input-container button {
        padding: 1rem;
        border-radius: 0.8rem;
      }
    }

    .centered-text {
      text-align: center;
    }

    #loading-spinner {
      display: none;
      color: #00ffcc;
      margin-top: 10px;
      transform: translateZ(10px);
    }

    .fa-spinner {
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Hide audio player visually but keep it functional */
    #background-audio {
      display: none;
    }
  </style>
</head>
<body>
  <!-- 3D Background Canvas -->
  <canvas id="canvas"></canvas>

  <div class="container">
    <!-- Audio Element for Background Music -->
    <audio id="background-audio" autoplay loop>
      <source src="https://github.com/lodxmd/LOD-X-MD-/raw/9273a5429bb57635e4c14b998a9f5745713e38da/media/BRAZILIAN%20PHONK%20MIX%20%D6%8E%20GYM%20PHONK%20%D6%8E%2020%20MINUTES%20OF%20BRAZILIAN%20PHONK%20-%20PhonkByte.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

    <div class="main">
      <div class="box" id="box">
        <div id="text">
          <i class="fa fa-user" style="color: #00ffcc; text-shadow: 0 0 10px #00ffcc; transform: translateZ(20px);"></i>
          <p>
            <h2 class="centered-text">𝗟𝗢𝗗-𝗫-𝗠𝗗 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗚𝗘𝗧</h2>
            <h4>𝐄𝐍𝐓𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 𝐖𝐈𝐓𝐇 𝐂𝐎𝐍𝐓𝐑𝐘 𝐂𝐎𝐃𝐄 ex.(+94)</h4>
            <div class="input-container">
              <input placeholder="+947271xxxxx" type="number" id="number" placeholder="❗ Enter your phone number with country code" name="">
              <button id="submit">Submit</button>
            </div>
            <div id="loading-spinner">
              <i class="fas fa-spinner fa-spin"></i>
            </div>
            <br>
            <br>
            <main id="pair"></main>
          </p>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"></script>
  <script>
    // Three.js 3D Background Animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create 3D Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 200;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffcc,
      size: 0.3,
      transparent: true,
      opacity: 0.8
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 100;

    function animate() {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.002;
      particleSystem.rotation.x += 0.001;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Handle Autoplay for Audio
    const audio = document.getElementById('background-audio');
    audio.volume = 0.5; // Set volume to 50% to avoid being too loud
    audio.muted = true; // Start muted to comply with browser autoplay policies

    // Attempt to unmute after user interaction
    document.body.addEventListener('click', () => {
      if (audio.muted) {
        audio.muted = false;
        audio.play().catch(err => {
          console.error('Autoplay failed:', err);
        });
      }
    }, { once: true });

    // Existing JavaScript Logic
    let a = document.getElementById("pair");
    let b = document.getElementById("submit");
    let c = document.getElementById("number");
    let box = document.getElementById("box");

    async function Copy() {
      let text = document.getElementById("copy").innerText;
      let obj = document.getElementById("copy");
      await navigator.clipboard.writeText(obj.innerText.replace('CODE: ', ''));
      obj.innerText = "✔️ COPIED";
      obj.style = "color:#00ffcc;font-weight:bold";
      obj.size = "5";
      setTimeout(() => {
        obj.innerText = text;
        obj.style = "color:#ff00ff;font-weight-bold";
        obj.size = "5";
      }, 500);
    }

    b.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!c.value) {
        a.innerHTML = '<a style="color:#ff00ff;font-weight:bold">❗Enter your WhatsApp number with country code.</a><br><br>';
      } else if (c.value.replace(/[^0-9]/g, "").length < 11) {
        a.innerHTML = '<a style="color:#ff00ff;font-weight:bold">❗Invalid number format. Please try again.</a><br><br>';
      } else {
        const bc = c.value.replace(/[^0-9]/g, "");
        let bb = "";
        let bbc = "";
        const cc = bc.split('');
        cc.map(a => {
          bbc += a;
          if (bbc.length == 3) {
            bb += " " + a;
          } else if (bbc.length == 8) {
            bb += " " + a;
          } else {
            bb += a;
          }
        });
        c.type = "text";
        c.value = "+" + bb;
        c.style = "color:#00ffcc;font-size:20px";
        document.getElementById("loading-spinner").style.display = "block";
        a.innerHTML = '';
        let { data } = await axios(`/code?number=${bc}`);
        let code = data.code || "❗ Service Unavailable";
        a.innerHTML = '<font id="copy" onclick="Copy()" style="color:#ff00ff;font-weight:bold" size="5">CODE: <span style="color:#00ffcc;font-weight:bold">' + code + '</span></font><br><br><br>';
        document.getElementById("loading-spinner").style.display = "none";
      }
    });
  </script>
</body>
</html>
