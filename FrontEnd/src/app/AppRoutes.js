import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
// import ResultPage from './election/ResultPage';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));



const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));


const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));



const Mdi = lazy(() => import('./icons/Mdi'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const BlankPage = lazy(() => import('./general-pages/BlankPage'));

const OnGoingElections = lazy(() => import('./election/OnGoingElections') );
const ElectionResults = lazy(() => import('./election/ElectionResults') );
const ElectionPage = lazy(()=> import('./election/ElectionPage'));
const ResultPage = lazy(()=> import('./election/ResultPage'));
const KYC = lazy(()=>import('./election/KYC'));
const Vote = lazy(()=>import('./election/Vote'));


const numElections = 1;
const electionNetworkURLs = [{id:1,url:"http://localhost:7545"}];
// const Election[];
// for(let i=1;i<=numElections;i++){
  // const Election[i-1] = <ElectionPage networkURL="http://localhost:7545" />
// }

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
        <Route exact path="/dashboard" component={ Dashboard } />
        <Route exact path="/on-going-elections" component={ OnGoingElections } />
        <Route exact path="/election-results" component={ElectionResults} />
        
        {
          electionNetworkURLs.map((elec)=>{
            return (<Route
              exact path={'/election-'+elec.id} 
              render={(props) => (
                <ElectionPage {...props} key={elec.id} networkURL={elec.url} currElection={'election-'+elec.id} isAuthed={true} />
              )}
            />)
          })
        }
        
        {
          electionNetworkURLs.map((elec)=>{
            return (<Route
              exact path={'/election-'+elec.id+'/kyc'} 
              render={(props) => (
                <KYC {...props} networkURL={elec.url} key={elec.id} currElection={'election-'+elec.id} isAuthed={true} />
              )}
            />)
          })
        }
        {
          electionNetworkURLs.map((elec)=>{
            return (<Route
              exact path={'/election-'+elec.id+'/vote'} 
              render={(props) => (
                <Vote {...props} networkURL={elec.url} key={elec.id} currElection={'election-'+elec.id} isAuthed={true} />
              )}
            />)
          })
        }

        {
          electionNetworkURLs.map((elec)=>{
            return <Route
              exact path={'/results-'+elec.id} 
              render={(props) => (
                <ResultPage {...props} key={elec.id} networkURL={elec.url} currElection={'results-'+elec.id} isAuthed={true} />
              )}
            />
          })
        }

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />


          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />


          <Route path="/icons/mdi" component={ Mdi } />


          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />


          {/* <Redirect to="/dashboard" /> */}
          <Redirect to="/user-pages/login-1" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;