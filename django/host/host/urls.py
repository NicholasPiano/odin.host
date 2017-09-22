
### Django
from django.conf.urls import url
from django.contrib import admin

### Local
from app.views import host_redirect

### Patterns
urlpatterns = [
	url(r'^admin/', admin.site.urls),

	# host redirect
	url(r'^$', host_redirect),
]
