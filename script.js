let scans = 0;
function checkURL() {
scans++;

document.getElementById("scanCount").innerText = scans;
    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    let score = 0;

    if (url.includes("login")) score += 20;
    if (url.includes("verify")) score += 20;
    if (url.includes("free")) score += 20;
    if (url.includes("gift")) score += 20;

    let ipPattern = /\d+\.\d+\.\d+\.\d+/;

    if (ipPattern.test(url)) score += 30;

    if (url.includes("bit.ly") || url.includes("tinyurl")) {
        score += 30;
    }

    document.getElementById("riskBar").value = score;

    if (score < 30) {
        result.innerHTML = "🟢 Safe Website <br> Risk Score: " + score + "/100";
        result.style.color = "lightgreen";
        document.getElementById(
"recommendation").innerHTML =
"✅ No major phishing indicators detected.";
    }
    if(url.includes("secure"))
score += 15;

if(url.includes("account"))
score += 15;

if(url.includes("bank"))
score += 20;

if(url.includes("payment"))
score += 20;

if(url.includes("update"))
score += 15;

if(url.includes("signin"))
score += 15;
    else if (score < 60) {
        result.innerHTML = "🟡 Suspicious Website <br> Risk Score: " + score + "/100";
        result.style.color = "yellow";
        document.getElementById(
"recommendation").innerHTML =
"⚠️ Verify the website before entering credentials.";
    }
    else {
        result.innerHTML = "🔴 High Risk Phishing Website <br> Risk Score: " + score + "/100";
        result.style.color = "red";
        document.getElementById(
"recommendation").innerHTML =
"🚫 Do not enter passwords or OTP.";
    }

    let table = document.getElementById("historyTable");

    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = url;
    cell2.innerHTML = score + "/100";
}
function clearHistory(){

let table =
document.getElementById("historyTable");

table.innerHTML = `
<tr>
<th>URL</th>
<th>Risk Score</th>
</tr>`;
}