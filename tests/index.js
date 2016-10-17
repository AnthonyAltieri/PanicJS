/**
 * @author Anthony Altieri on 10/15/16.
 */

import Panic from '../src/Panic';


const SERVER_PREFIX = 'http://localhost:9000';
const HEARTBEAT_ENDPOINT = 'http://localhost:9000/isAlive';
const FIVE_SECONDS = 5;
const ONE_SECOND = 1;
const TWO_SECONDS = 2;
const ONE_THIRD_SECOND = 0.33;
const TYPE = 'POST';


let panic;

function test() {
  panic = new Panic(HEARTBEAT_ENDPOINT, TYPE, TWO_SECONDS, ONE_THIRD_SECOND);
}

const testButton = document.createElement('button');
testButton.onclick = test;
document.body.appendChild(testButton);


