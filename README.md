# Circom PIL Machinery

## Introduction

This repo contains a serie of simple examples showing how Circom and PIL can be combined in order to achieve the following.

**Depth 0 Recursion:**
1.  [circuit-SNARK](https://github.com/hecmas/circom-pil-machinery/tree/main/circuit-SNARK): Generate a (zk)-SNARK from an arithmetic circuit described in Circom.
1. [circuit-STARK](https://github.com/hecmas/circom-pil-machinery/tree/main/circuit-STARK): Generate a STARK from an arithmetic circuit described in Circom.
1. [sm-STARK](https://github.com/hecmas/circom-pil-machinery/tree/main/sm-STARK): Generate a STARK from a state machine described in PIL.
1. [sm-SNARK](https://github.com/hecmas/circom-pil-machinery/tree/main/sm-SNARK): Generate a (zk)-SNARK from a state machine described in PIL. **This cannot be done yet, one needs to go through generating a STARK before being able to generate the SNARK since the conversion from PIL to Circom can only be done for recursive purposes.**

**Depth 1 Recursion:**
1. circuit-SN-ST: Generate a STARK of a SNARK from an arithmetic circuit described in Circom. **Not doable**
2. [circuit-ST-SN](https://github.com/hecmas/circom-pil-machinery/tree/main/circuit-ST-SN): Generate a (zk)-SNARK of a STARK from an arithmetic circuit described in Circom.
3. circuit-SN-SN: Generate a (zk-)SNARK of a SNARK from an arithmetic circuit described in Circom. **Not doable**
4. circuit-ST-ST: Generate a STARK of a STARK from an arithmetic circuit described in Circom. **Not doable**
5. sm-SN-ST: Generate a STARK of a SNARK from a state machine described in PIL. **Not doable**
6. sm-ST-SN: Generate a (zk-)SNARK of a STARK from a state machine described in PIL. **Not doable**
7. sm-SN-SN: Generate a (zk-)SNARK of a SNARK from a state machine described in PIL. **Not doable**
8. [sm-ST-ST](https://github.com/hecmas/circom-pil-machinery/tree/main/sm-SN-ST): Generate a STARK of a STARK from a state machine described in PIL.

**Unlimited Depth Recursion:**
1. [sm-ST-ST-ST-ST-ST-SN](https://github.com/hecmas/circom-pil-machinery/tree/main/sm-ST-ST-ST-ST-ST-SN): Generate a STARK of a STARK of a STARK of a STARK of a STARK of a (zk-)SNARK from a state machine described in PIL.

Under the understanding of each of the previous proof generation mechanisms one can perform deeper proof compositions such as a (zk)-SNARK of a STARK of a STARK or viceversa.

> The examples are so simple to be useful for a practical setting. However, the very same workaround can be used with almost no effort to complex circuits like [circom-ecdsa](https://github.com/0xPARC/circom-ecdsa).