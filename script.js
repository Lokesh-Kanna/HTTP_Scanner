async function getDetails() {
    let website = document.getElementById('websiteinp').value;
    console.log(website);

    let details = await fetch(`https://http-observatory.security.mozilla.org/api/v1/analyze?host=${website}`);
    
}