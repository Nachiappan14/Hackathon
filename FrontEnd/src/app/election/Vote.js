import React from "react";
import Web3 from "web3";
import { useState,useEffect } from "react";

const Vote = (props) => {
    const [state,setState] = useState({});
    useEffect(()=>{
        loadBlockchainData();
    },[]);
    async function loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
        const accounts = await web3.eth.getAccounts()
        setState({ ...state, account: accounts[0], web3: web3})
    }
    {window.location.href="http://localhost:3001"}
    return <>Voting Page</>
}

export default Vote;