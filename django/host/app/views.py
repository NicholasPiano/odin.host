from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.
def host_redirect(request):

	# potentially hit database here for registry id
	address = 'localhost:8081'
	uuid = 'hello'

	return redirect('http://{address}/{uuid}'.format(address=address, uuid=uuid))