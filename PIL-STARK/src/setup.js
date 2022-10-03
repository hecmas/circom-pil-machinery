
const { FGL } = require("pil-stark");

module.exports.buildConstants = async function (pols) {

    const N = pols.ISFIRST.length;

    for ( let i=0; i<N; i++) {
        pols.ISFIRST[i] = (i == 0) ? 1n : 0n;
    }

    for ( let i=0; i<N; i++) {
        pols.ISLAST[i] = (i == N-1) ? 1n : 0n;
    }
}

module.exports.execute = async function (pols, input) {

    const N = pols.a0.length;

    pols.a0[0] = BigInt(input[1]);
    pols.a1[0] = BigInt(input[1]);

    for (let i=1; i<N; i++) {
        pols.a0[i] =pols.a1[i-1];
        pols.a1[i] = FGL.add(pols.a0[i-1], pols.a1[i-1]);
    }

    return pols.a1[N-1];
}