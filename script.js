document.addEventListener('DOMContentLoaded', function () {


    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");


    function usernamevalidate(username) {
        if (username.trim() === "") {
            alert("Username cannot be empty");
            return false;
        }
        const Regex = /^[a-zA-Z0-9](?:[a-zA-Z0-9_-]{1,13}[a-zA-Z0-9])?$/;
        const ismatching = Regex.test(username);
        if (!ismatching) {
            alert('Username is invalid');
        }
        return ismatching;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`
        try {
            searchButton.textContent = 'Searching...';
            searchButton.disabled = true;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("unable to fetch detail");
            }
            const parsedata = await response.json();
            console.log("logging data:", parsedata);

            displayUserData(parsedata);
        }
        catch (error) {
            statsContainer.innerHTML = `<p>No data found</p>`
        }
        finally {
            searchButton.textContent = 'Search';
            searchButton.disabled = false;

        }
    }

    function updateprogress(solved,total,label,circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedata) {
        if (!parsedata || parsedata.status !== "success") {
            console.error("Invalid data received");
            return;
        }

        const totalSolved = parsedata.totalSolved;
        const totalQuestions = parsedata.totalQuestions;
        const easySolved = parsedata.easySolved;
        const totalEasy = parsedata.totalEasy;
        const mediumSolved = parsedata.mediumSolved;
        const totalMedium = parsedata.totalMedium;
        const hardSolved = parsedata.hardSolved;
        const totalHard = parsedata.totalHard;
        const acceptanceRate = parsedata.acceptanceRate;
        const ranking = parsedata.ranking;
        const contributionPoints = parsedata.contributionPoints;

        // console.log("📊 LeetCode User Stats:");
        // console.log(`Total Solved: ${totalSolved} / ${totalQuestions}`);
        // console.log(`Easy: ${easySolved} / ${totalEasy}`);
        // console.log(`Medium: ${mediumSolved} / ${totalMedium}`);
        // console.log(`Hard: ${hardSolved} / ${totalHard}`);
        // console.log(`Acceptance Rate: ${acceptanceRate}%`);
        // console.log(`Ranking: ${ranking}`);
        // console.log(`Contribution Points: ${contributionPoints}`);

        updateprogress(easySolved,totalEasy,easyLabel,easyProgressCircle);
        updateprogress(mediumSolved,totalMedium,mediumLabel,mediumProgressCircle);
        updateprogress(hardSolved,totalHard,hardLabel,hardProgressCircle);
    }



    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("Logging username:", username);
        if (usernamevalidate(username)) {
            fetchUserDetails(username);
        }
    })

})