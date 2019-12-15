#Import libraries
import pyaudio
import wave
from scipy.io.wavfile import read
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from PIL import Image
from escpos.connections import getUSBPrinter
from gpiozero import Button, LED
import time
from signal import pause
import datetime
import os

# Define the LED and the Button
led=LED(22)
button1=Button(2)

# Define where to save audiorecordings and image files
base_path = "/home/pi/programma00/urli/"

# Define the function
def printer():

    # Recording programm
    nome = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    chunk = 1024  # Record in chunks of 1024 samples
    sample_format = pyaudio.paInt16  # 16 bits per sample
    channels = 2
    fs = 44100  # Record at 44100 samples per second
    seconds = 3
    filename = base_path + nome + "/output.wav" # Name of the file
    os.mkdir(base_path + nome)

    p = pyaudio.PyAudio()  # Create an interface to PortAudio

    print('Recording') # Print in the terminal
    led.on() # Turn the LED on while recording

    stream = p.open(format=sample_format,
                    channels=channels,
                    rate=fs,
                    frames_per_buffer=chunk,
                    input=True)

    frames = []  # Initialize array to store frames

    # Store data in chunks for 3 seconds
    for i in range(0, int(fs / chunk * seconds)):
        data = stream.read(chunk)
        frames.append(data)

    # Stop and close the stream
    stream.stop_stream()
    stream.close()
    # Terminate the PortAudio interface
    p.terminate()

    print('Finished recording') # Print in the terminal
    led.off() # Turn the LED off

    # Save the recorded data as a WAV file
    wf = wave.open(filename, 'wb')
    wf.setnchannels(channels)
    wf.setsampwidth(p.get_sample_size(sample_format))
    wf.setframerate(fs)
    wf.writeframes(b''.join(frames))
    wf.close()


    #-------------------------------------#
    #-------------------------------------#
    #-------------------------------------#


    #Conversion Programm

    # Read audio samples
    input_data = read(base_path + nome + "/output.wav")
    audio = input_data[1]

    # Plot the first samples from 5000 to 200000
    plt.plot(audio[5000:200000])
    plt.tick_params(top=False, bottom=False, left=False, right=False, labelleft=False, labelbottom=False,)
    plt.box(False)

    # Display the plot
    plt.savefig(base_path + nome + "/onda00.png")



    #-------------------------------------#
    #-------------------------------------#
    #-------------------------------------#

    #Resize Programm

    img = Image.open(base_path + nome + "/onda00.png") # Image extension *.png,*.jpg

    # New dimension
    new_width  = 360
    new_height = 255
    img = img.resize((new_width, new_height))

    img.save(base_path + nome + "/onda00_conv.png") # Format may what u want ,*.png,*jpg,*.gif


    #-------------------------------------#
    #-------------------------------------#
    #-------------------------------------#

    #Print Programm

    # Create the printer object with the connection params
    printer = getUSBPrinter()(idVendor=0x0416,
                              idProduct=0x5011,
                              inputEndPoint=0x81,
                              outputEndPoint=0x01)


    # Print blank line
    printer.lf()
    printer.lf()
    # Print Image
    printer.image('/home/pi/programma00/1.png')
    printer.image(base_path + nome + "/onda00_conv.png")
    printer.image('/home/pi/programma00/2.png')
    printer.image('/home/pi/programma00/3.png')
    printer.lf()
    printer.lf()
    printer.lf()
    printer.image('/home/pi/programma00/4.png')
    printer.lf()
    printer.lf()
    printer.lf()


    print("dormo") # Print in Terminal

    # Wait 10 sec before re-run
    time.sleep(10)

    print("sveglio") # Print in Terminal

# Define Function for the Button
def general():

    # Blink LED When ready
    for _ in range(3):
        led.on()
        time.sleep(0.2)
        led.off()
        time.sleep(0.2)

    # When button is pressed Run the Function
    button1.when_pressed = printer
    pause()

# Run the Programm
general()
