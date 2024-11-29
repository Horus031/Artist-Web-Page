const title = document.getElementById('title');
const artists = {
    claude: {
        name: 'Claude Monet',
        folder: 'claude'
    },
    davinci: {
        name: 'Leonardo da Vinci',
        folder: 'davinci'
    },
    vangogh: {
        name: 'Vincent Van Gogh',
        folder: 'vangogh'
    }
};

function showArtistWorks(artist) {
    title.innerHTML = `Works of ${artists[artist].name}`;
    for(let i = 1; i <= 10; i++) {
        document.getElementById(`img${i}`).src = `assets/worksimg/${artists[artist].folder}/${i}.jpg`;
    }
}
// Add event listeners to all artists
Object.keys(artists).forEach(artist => {
    const element = document.getElementById(artist);
    ['click', 'mouseover'].forEach(event => {
        element.addEventListener(event, () => showArtistWorks(artist));
    });
});