const pics = document.querySelectorAll('.github-profile');
const namex = document.querySelectorAll('.name');
const bio = document.querySelectorAll('.bio');
const company = document.querySelector('.company');
const blog = document.querySelector('.blog');
const locationx = document.querySelector('.location');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const jmlRepo = document.querySelector('.jumlah_repo');
const jobStatus = document.querySelector('.job-status');


function fetchingApi() {
    fetch('https://api.github.com/users/doniwirawan')
        .then(data => data.json())
        .then(data => {


            pics.forEach(pic => {
                pic.src = `${data.avatar_url}`;
            });
            namex.forEach(names => {
                namex[0].innerHTML = `${data.name}`;
                namex[1].innerHTML = `<i class="fa fa-user" aria-hidden="true"></i> My Name is ${data.name}`;
            })
            bio.forEach(bio => {

                bio.innerHTML = `<i class="fa fa-laptop" aria-hidden="true"></i> I'm ${data.bio}`;
            })

            company.innerHTML = `<i class="fa fa-briefcase" aria-hidden="true"></i> I'm work as a ${data.company}`;

            blog.innerHTML = `<i class="fa fa-globe"></i> My Personal Blog is <a href="https://${data.blog}">${data.blog}</a>`;

            locationx.innerHTML = `<i class="fa fa-map-marker"></i> I'm based in ${data.location}`;

            followers.innerHTML = `<i class="fa fa-users" aria-hidden="true"></i> Followers: <span class="number">${data.followers}</span>`;

            following.innerHTML = `<i class="fa fa-users" aria-hidden="true"></i> Following: <span class="number">${data.following}</span>`;

            jmlRepo.innerHTML = `<i class="fa fa-globe" aria-hidden="true"></i> My Public Repos: <span class="number">${data.public_repos}</span>`;



            if (data.hireable == true) {
                jobStatus.innerHTML = `
                     <p class="mx-auto  mt-3 border border-primary p-2 rounded text-primary">Open For Jobs</p>
                `
            } else {
                jobStatus.innerHTML = `
                     <p class="mx-auto  mt-3 border border-danger p-2 rounded text-danger">Closed For Jobs</p>
                `
            }
        })
}
fetchingApi();



window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';

    }, 500);
})
