import subprocess

res = subprocess.call(['g++', '/workdir/test.cpp','-std=c++98','-fno-stack-protector','-o','test'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
if res == 0:  # compilation succeeded
	with open('/workdir/input.txt', 'r') as input:                    			
		return_val = subprocess.call(['./test'], stdin=input, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL) 		# run the program
		print(return_val, end = '')
else:
    print(2, end = '');  