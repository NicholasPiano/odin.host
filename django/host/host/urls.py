
### Django
from django.conf.urls import url
from django.contrib import admin

### Local
from app.views import host_entry_point

### Patterns
urlpatterns = [
	url(r'^admin/', admin.site.urls),

	# host redirect
	url(r'^$', host_entry_point),
]
