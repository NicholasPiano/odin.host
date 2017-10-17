
### Django
from django.conf.urls import url

### Local
from app.views import host_entry_point

### Patterns
urlpatterns = [
  # host entry point
  url(r'^$', host_entry_point),
]
