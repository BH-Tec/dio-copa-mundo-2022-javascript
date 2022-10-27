import app from './firebase.js'
import { getFirestore, doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

const db = getFirestore(app)

// solta o confete
function showConfetti(id) {
    const elemento = document.getElementById(id)
    party.confetti(elemento)
}

// atualiza o score do jogo
function updateScore(id, br, se) {
    const elemento = document.getElementById(id)
    elemento.innerText = `${br} x ${se}`
}

// reproduz o audio do galvão
function throwGalvao() {
    const audio = new Audio('assets/audio/gol.mp3')
    audio.playbackRate = 1.5
    audio.play()
}

// exibi o emoji
function showEmoji() {
    const emoji = document.getElementById('emoji-gol')
    emoji.classList.add('show')

    setTimeout(() => {
        emoji.classList.remove('show')
    }, 4000)
}

onSnapshot(doc(db, "matches", "br-01"), (doc) => {
    const { br, se } = doc.data()

    updateScore('br-01', br, se)
    if (br > 0) {
        showConfetti('br-01')
        throwGalvao()
        showEmoji()
    }
});



