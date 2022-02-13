import React, { useEffect, useState } from "react";
import Web3 from "web3";
import $ from 'jquery';
// import TruffleContract from 'truffle-contract';

var contract = require("@truffle/contract");

const KYC = (props) => {
    const [state,setState] = useState({});
    useEffect(()=>{
        loadBlockchainData();
    },[]);
    async function loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
        const accounts = await web3.eth.getAccounts()
        setState({ ...state, account: accounts[0], web3: web3})
    }
    
    // var MyContract = contract({})
    
    
    // console.log()
    $.getJSON("../Election.json",function(election){
        setState({...state,Election:contract(election)});
        state.Election.setProvider(state.web3);
        console.log(state.Election);
    });
    {window.location.href="http://localhost:3001/results.html"}
    return <>KYC page: {state.account}</>
}

export default KYC;