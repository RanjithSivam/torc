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

const getWalletconnect = () => {
  let provider = new WalletConnectProvider.default({
    infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
    rpc: { 56: "https://bsc-dataseed.binance.org/" },
  });

  provider.chainId = 56;
  provider.enable().then(function (res) {
    return new Web3(provider);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("metamask_wallet_connect")
    .addEventListener("click", async () => {
      const web3 = await getMetamask();
      const walletAddress = await web3.eth.requestAccounts();
      document.getElementById("metamask_wallet_connect").innerText =
        walletAddress;
    });

  document
    .getElementById("walletconnect_wallet_connect")
    .addEventListener("click", () => {
      const web3 = getWalletconnect();
    });
});
