# music-visualizer
This visualization takes audio input from the microphone and performs a FFT analysis on it. It computes amplitude values along the frequency domain. FFT analyzes a very short snapshot of sound and returns an array of amplitude measurements, referred to as bins. The array is 1024 bins long in this case. You can change the bin array length, but it must be a power of 2 between 16 and 1024 in order for the FFT algorithm to function correctly.

![image](https://user-images.githubusercontent.com/28980632/76987075-9aa15100-6968-11ea-97cd-0ee8c2600934.png)
