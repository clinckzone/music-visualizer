function ParticleSystem(bins, fft)		{	
	this.radius = width/4;
	
	this.display = function()	{
		//get waveform and amplitude
		this.waveform = fft.waveform(bins); 
		this.level = mic.getLevel();
		
		for(var i = 0; i < this.waveform.length; i++)	{

			var angle = map(i, 0, this.waveform.length, 0, 360);
			var displacement = map(this.waveform[i], -1, 1, -75, 75);
			var color = map(displacement, -75, 75, 0, 255);

			var particle = new Particle(angle, this.radius + this.level + displacement, color);
			particle.display();
		}
	}
}				