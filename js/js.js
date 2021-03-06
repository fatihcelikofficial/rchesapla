const { Block } = require("strip-comments/lib/Node");

function blockAmount() {
    // Returns pre-set block rewards based on block selected
    // Update if updated on rollercoin
    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            // BITCOIN BLOK ÖDÜLÜ | 30000 SAT
            var blockreward = 30000;
            document.getElementById("block-reward").value = 30000;
            break;
        case 1:
            // DOGE BLOK ÖDÜLÜ | 20 DOGE
            var blockreward = 60;
            document.getElementById("block-reward").value = 60;
            break;
        case 2:
            // ETH BLOK ÖDÜLÜ | 0.005 ETH
            var blockreward = 0.006;
            document.getElementById("block-reward").value = 0.006;
            break;
        case 3:
            // BNB BLOK ÖDÜLÜ | 0.012 BNB
            var blockreward = 0.012;
            document.getElementById("block-reward").value = 0.012;
            break;
        case 4: 
            // MATIC BLOK ÖDÜLÜ | 3 MATIC
            var blockreward = 5;
            document.getElementById("block-reward").value = 5;
            console.log("matic end");
            break;
        default:
            // RLT BLOK ÖDÜLÜ | 30 RLT
            console.log("rlt start");
            var blockreward = 30;
            document.getElementById("block-reward").value = 30;
            break;
    }
}

function calculateGoalPower() {
    console.log("Calculate Begin");
    var netpower = parseFloat(document.getElementById("network-power").value);
    var goalpower = parseFloat(document.getElementById("goal-power").value);
    var blockreward = parseFloat(document.getElementById("block-reward").value);

    switch (document.getElementById("network-power-selector").selectedIndex) {
        case 0:
            netpower *= 1000000000;
            console.log("Netpower after ghs conversion: " + netpower);
            break;
        case 1:
            netpower *= 1000000000000;
            console.log("Netpower after ths conversion: " + netpower);
            break;
        case 2:
            netpower *= 1000000000000000;
            console.log("Netpower after phs conversion: " + netpower);
            break;
        default:
            netpower *= 1000000000000000000;
            console.log("Netpower after ehs conversion: " + netpower);
            break;
    }
    switch (document.getElementById("goal-power-selector").selectedIndex) {
        case 0:
            //GH/s
            goalpower *= 1000000000;
            console.log("goalpower after ghs conversion: " + goalpower);
            break;
        case 1:
            //TH/s
            goalpower *= 1000000000000;
            console.log("goalpower after ths conversion: " + goalpower);
            break;
        case 2:
            //PH/s
            goalpower *= 1000000000000000;
            console.log("goalpwer after phs conversion: " + goalpower);
            break;
        default:
            //EH/s
            goalpower *= 1000000000000000000;
            console.log("goalpwer after ehs conversion: " + goalpower);
            break;
    }
    console.log("Block: " + blockreward);
    var exp_reward = blockreward * (goalpower / netpower);

    console.log("exp. reward " + exp_reward.toFixed(4));

    /* const btcBlockTimer = 600;
    const dogeBlockTimer = 600;
    console.log(dogeBlockTimer + "seconds doge")
    const ethBlockTimer = 600; */

    //All timers are now the same 2021-04-19
    const BlockTimer = 600;
    const secFullDay = 86400;

    const dailyBtcBlocks = secFullDay / BlockTimer;
    const dailyDogeBlocks = secFullDay / BlockTimer;
    const dailyEthBlocks = secFullDay / BlockTimer;
    const dailyBnbBlocks = secFullDay / BlockTimer;
    const dailyMaticBlocks = secFullDay / BlockTimer;
    console.log(dailyBtcBlocks + ", " + dailyDogeBlocks + ", " + dailyEthBlocks)

    console.log("DailyBTC " + dailyBtcBlocks);
    console.log("DailyDOGE " + dailyDogeBlocks);
    console.log("DailyETH " + dailyEthBlocks);
    console.log(exp_reward);

    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " SAT";
            var btcResult = (exp_reward * dailyBtcBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = btcResult + " SAT";
            document.getElementById("weekly").innerHTML = (btcResult * 7).toFixed(4) + " SAT";
            document.getElementById("monthly").innerHTML = (btcResult * 30).toFixed(4) + " SAT";
			document.getElementById("yearly").innerHTML = (btcResult * 365).toFixed(4) + " SAT";
            break;
        case 1:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " DOGE";
            var dogeResult = (exp_reward * dailyDogeBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = dogeResult + " DOGE";
            document.getElementById("weekly").innerHTML = (dogeResult * 7).toFixed(4) + " DOGE";
            document.getElementById("monthly").innerHTML = (dogeResult * 30).toFixed(4) + " DOGE";
			document.getElementById("yearly").innerHTML = (dogeResult * 365).toFixed(4) + " DOGE";
            break;
        case 2:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " ETH";
            var ethResult = (exp_reward * dailyEthBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = ethResult + " ETH";
            document.getElementById("weekly").innerHTML = (ethResult * 7).toFixed(8) + " ETH";
            document.getElementById("monthly").innerHTML = (ethResult * 30).toFixed(8) + " ETH";
			document.getElementById("yearly").innerHTML = (ethResult * 365).toFixed(8) + " ETH";
            break;
        case 3:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " BNB";
            var bnbResult = (exp_reward * dailyBnbBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = bnbResult + " BNB";
            document.getElementById("weekly").innerHTML = (bnbResult * 7).toFixed(8) + " BNB";
            document.getElementById("monthly").innerHTML = (bnbResult * 30).toFixed(8) + " BNB";
			document.getElementById("yearly").innerHTML = (bnbResult * 365).toFixed(8) + " BNB";
            break;
        case 4:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " MATIC";
            var maticResult = (exp_reward * dailyMaticBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = maticResult + " MATIC";
            document.getElementById("weekly").innerHTML = (maticResult * 7).toFixed(8) + " MATIC";
            document.getElementById("monthly").innerHTML = (maticResult * 30).toFixed(8) + " MATIC";
			document.getElementById("yearly").innerHTML = (maticResult * 365).toFixed(8) + " MATIC";
            break;
        default:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " RLT";
            var rltResult = (exp_reward * dailyEthBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = rltResult + " RLT";
            document.getElementById("weekly").innerHTML = (rltResult * 7).toFixed(4) + " RLT";
            document.getElementById("monthly").innerHTML = (rltResult * 30).toFixed(4) + " RLT";
			document.getElementById("yearly").innerHTML = (rltResult * 365).toFixed(4) + " RLT";
            break;
    }
}