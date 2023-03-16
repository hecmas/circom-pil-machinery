pragma circom 2.1.5;

template Fibonacci(n) {
    signal input a0;
    signal input a1;
    signal output out;

    signal im[n-1];

    for (var i=0; i<n-1; i++) {
        if (i==0) {
            im[i] <== a0 + a1;
        } else if (i==1) {
            im[i] <== a1 + im[0];
        } else {
            im[i] <== im[i-2] + im[i-1];
        }
    }

    out <== im[n-2];
    log("out =", out);
}

component main {public [a0]} = Fibonacci(2**5);