import Web3 from "web3";
import React, { Component, useEffect, useState } from 'react';

const ResultPage = (props) => {
    const [state,setState] = useState({});
    useEffect(()=>{
        loadBlockchainData();
    },[]);
    async function loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
        const accounts = await web3.eth.getAccounts()
        setState({ ...state, account: accounts[0], web3: web3})
    }
    {window.location.href="http://localhost:3001/results.html"}
    return <>Results Page</>;
};

export default ResultPage;