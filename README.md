# Circom PIL Machinery

## Introduction

This repo contains a serie of simple examples showing how Circom and PIL can be combined in order to achieve the following.
**Basic:**
1.  [circom-SNARK](https://github.com/hecmas/circom-pil-machinery/tree/main/circom-SNARK): Generate a (zk)-SNARK from a circuit description with Circom.
1. [PIL-STARK](https://github.com/hecmas/circom-pil-machinery/tree/main/PIL-STARK): Generate a STARK from a state machine description with PIL.

**Intermediate:**
1. [circom-STARK](https://github.com/hecmas/circom-pil-machinery/tree/main/circom-STARK): Generate a STARK from a circuit description with Circom.
1. [PIL-SNARK](https://github.com/hecmas/circom-pil-machinery/tree/main/PIL-SNARK): Generate a (zk)-SNARK from a state machine description with PIL. 

**Advanced:**
1. [TODO](): Generate a (zk)-SNARK of a STARK from either Circom or PIL.
1. [TODO](): Generate a STARK of a SNARK from either Circom or PIL.

Under the understanding of each of the previous proof generation mechanisms one can perform deeper proof compositions such as a (zk)-SNARK of a STARK of a STARK or viceversa.

> The examples are so simple to be useful for a practical setting. However, the very same workaround can be used with almost no effort to complex circuits like [circom-ecdsa](https://github.com/0xPARC/circom-ecdsa).

## Description of the Examples