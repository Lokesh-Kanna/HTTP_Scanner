var scanId;

async function getDetails() {
    let website = document.getElementById('websiteinp').value;
    console.log(website);

    let details = await fetch(`https://http-observatory.security.mozilla.org/api/v1/analyze?host=${website}`);
    let det = await details.json();
    
    let time = det.end_time;
    let algoVers = det.algorithm_version;
    let grd = det.grade;
    let score = det.score;
    let indi = det.likelihood_indicator;
    let totqty = det.tests_quantity;
    let pass = det.tests_passed;
    let fail = det.tests_failed;
    let id = det.scan_id;

    scanID = id;
    console.log(scanID);

    var card = document.createElement('div');
    card.setAttribute('class', 'card');
    document.body.appendChild(card);

    var cardheader = document.createElement('div');
    cardheader.setAttribute('class', 'card-header');
    card.appendChild(cardheader);

    var header = document.createElement('h3');
    header.setAttribute('class', 'header');
    header.innerHTML = `Scan Result for <u>${website}</u>`;
    cardheader.appendChild(header);

    var cardbody = document.createElement('div');
    cardbody.setAttribute('class', 'card-body');
    card.appendChild(cardbody);

    var timedisp = document.createElement('p');
    timedisp.innerHTML = `<b>Scan end time:</b> ${time}`;
    var algver = document.createElement('p');
    algver.innerHTML = `<b>Algorythm version:</b> ${algoVers}`;
    var scr = document.createElement('p');
    scr.innerHTML = `<b>Website score:</b> ${score}`;
    var grade = document.createElement('p');
    grade.innerHTML = `<b>Website grade:</b> ${grd}`;
    var ind = document.createElement('p');
    ind.innerHTML = `<b>Risk likelihood:</b> ${indi}`;
    var ttest = document.createElement('p');
    ttest.innerHTML = `<b>Total number of tests performed:</b> ${totqty}`;
    var pas = document.createElement('p');
    pas.innerHTML = `<b>Tests passed:</b> ${pass}`;
    var fil = document.createElement('p');
    fil.innerHTML = `<b>Tests failed:</b> ${fail}`;
    cardbody.append(timedisp, algver, scr, grade, ind, ttest, pas, fil);
}