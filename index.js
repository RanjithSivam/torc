const getMetamask = async () => {
  return new Promise(async (resolve, reject) => {
    const web3 = new Web3(window.ethereum);

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      resolve(web3);
    } catch (err) {
      reject(err);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("wallet_connect")
    .addEventListener("click", async () => {
      const web3 = await getMetamask();
      const walletAddress = await web3.eth.requestAccounts();
      document.getElementById("wallet_connect").innerText = walletAddress;
    });
});
