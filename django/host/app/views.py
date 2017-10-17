
# Django
from django.shortcuts import render, redirect
from django.http import HttpResponse

# Entry point
def host_entry_point(request):

  # potentially hit database here for registry id
  address = 'localhost:8081'
  uuid = 'hello'

  return render(request, 'app/host.html', {
    'registry': {
      'server': address,
      'uuid': uuid,
    },
  })
