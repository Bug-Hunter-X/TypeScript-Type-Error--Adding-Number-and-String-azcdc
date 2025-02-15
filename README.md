# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript that arises from attempting to perform an operation on incompatible types. Specifically, the example shows an attempt to add a number and a string.

## Bug

The `add` function is declared to accept two numbers and return a number. However, the call to `add` passes a string ('10') as the second argument, leading to a type error. 

## Solution

The solution involves ensuring that both arguments passed to the `add` function are numbers.  This can be done through explicit type checking or type conversion before the addition operation.