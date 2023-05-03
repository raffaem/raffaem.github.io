---
layout: post
title: Intel MKL vs OpenBLAS - Benchmarks
date: 2023-05-13 14:04:00+0200
description: Benchmarking Intel's MKL and OpenBLAS as BLAS backends for R
tags: R, MKL, oneAPI, openBLAS, benchmark
categories: note
related_posts: false
---

I did some benchmarks using the [benchmarkme](https://github.com/csgillespie/benchmarkme) package.

Intel's MKL backend overperforms OpenBLAS in all 5 `matrix_fun` tests and in one `matrix_cal` test.

It slightly underperforms OpenBLAS in all other tasks.

Highest performance increase is achieved in the `lm` test, where we have an increase in performances of almost 620%. Minimum performance increase is achieved in the `determinant` test, with an increase of 167%.

Minimum decrease is in the `fft` test, -1.54%, while maximum decrease is in the `escoufier` test, -94.88%.

Source code [here](https://github.com/raffaem/r-mkl-vs-openblas).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/2023-05-13-matrix_cal.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/2023-05-13-matrix_fun.png" class="img-fluid rounded z-depth-1" zoomable=true %} 
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/2023-05-13-prog.png" class="img-fluid rounded z-depth-1" zoomable=true %} 
    </div>
</div>
<div class="caption">
    Boxplots of performance comparison. Click to zoom.
</div>

|Test Group |Test          | Intel MKL| OpenBLAS|     Diff| Diff (%)|      t| p-value|
|:----------|:-------------|---------:|--------:|--------:|--------:|------:|-------:|
|matrix_cal |lm            |     88.40|   634.14|   545.74|   617.35|  -4.06|    0.00|
|matrix_fun |inverse       |    981.21|  6064.75|  5083.54|   518.09| -14.92|    0.00|
|matrix_fun |eigen         |   2279.97| 10786.11|  8506.14|   373.08| -12.64|    0.00|
|matrix_fun |cholesky      |    458.37|  1805.48|  1347.11|   293.89| -11.19|    0.00|
|matrix_fun |determinant   |    665.80|  1782.32|  1116.52|   167.70| -54.24|    0.00|
|matrix_fun |fft           |    124.38|   122.46|    -1.92|    -1.54|   1.54|    0.12|
|matrix_cal |sort          |    552.04|   533.11|   -18.93|    -3.43|  22.92|    0.00|
|prog       |fib           |     87.86|    84.78|    -3.08|    -3.51|   2.72|    0.01|
|matrix_cal |manip         |    189.00|   181.56|    -7.44|    -3.94|   2.42|    0.02|
|matrix_cal |power         |    168.04|   160.51|    -7.53|    -4.48|  16.54|    0.00|
|prog       |toeplitz      |    657.00|   592.64|   -64.36|    -9.80|   9.67|    0.00|
|prog       |gcd           |    343.03|   293.87|   -49.16|   -14.33|  11.80|    0.00|
|prog       |hilbert       |     89.01|    70.77|   -18.24|   -20.49|  12.64|    0.00|
|matrix_cal |cross_product |    957.21|   327.50|  -629.71|   -65.79| 220.18|    0.00|
|prog       |escoufier     |   8395.41|   429.77| -7965.64|   -94.88| 528.94|    0.00|

