# HTTP HTTPS и их параметры 
_______________________________________________________________________________________
## Лабораторная работа №1
## Вольвак Г.В. АСБ-3-036

Команда для получения информации о сайте: **curl -I -v https://code.visualstudio.com/**
_______________________________________________________________________________________

### VSC

```shell
> GET / HTTP/2
> Host: code.visualstudio.com                                   - Значение хоста ресурса
> user-agent: curl/8.0.1                                        - Используемый браузер
> accept: */*
> 
< HTTP/2 200                                                    - Код ответа 200 "Запрос успешно обработан"
< content-length: 50213                                         - Размер отправляемого сообщения в байтах
< content-type: text/html; charset=utf-8                        - Формат данных
< accept-ranges: bytes
< etag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"                    - Идентификатор конкретной версии ресурса
< strict-transport-security: max-age=31536000; includeSubDomains
< content-security-policy: frame-ancestors 'self'               - Управляет ресурсами которые разрешено загружать user
< x-frame-options: SAMEORIGIN                                   - Указывает, следует ли разрешить браузеру отображать страницу
< x-xss-protection: 1; mode=block                               - Включает фильтрацию межсайтовых сценариев.
< x-content-type-options: nosniff                               - Отключает MIME
< x-content-type-options: nosniff
< x-powered-by: ASP.NET                                         - Может устанавливаться хостинговыми средами или другими   фреймворками и содержать инф о них
< x-azure-ref: 0z78CZQAAAAB5KdtNCSHMQaTxs7jdATjBU1RPRURHRTE0MTgAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
< x-cache: CONFIG_NOCACHE
< date: Thu, 14 Sep 2023 08:09:51 GMT                            - Дата обращения
```

### RGUPS

```shell
Connected to www.rgups.ru (80.72.224.90) port 443 (#0) - Было описано ранее
using HTTP/1.x
GET / HTTP/1.1
Host: www.rgups.ru
User-Agent: curl/8.1.2
Accept: */*

HTTP/1.1 200 OK
Server: nginx/1.19.1
Date: Thu, 07 Sep 2023 09:31:21 GMT
Content-Type: text/html; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
X-Powered-By: ProcessWire CMS
Set-Cookie: wire=aee3aa42a2bbeff42e46de58ef8ce8a9; path=/; HttpOnly; SameSite=Lax
Expires: Thu, 19 Nov 1981 08:52:00 GMT                          - Дата/время, после которого ответ считается устаревшим.
Cache-Control: no-store, no-cache, must-revalidate              - Директивы для механизмов кэширования как в запросах, так и в ответах.
Pragma: no-cache                                                - Используется для обратной совместимости с кэшами HTTP/1.0
Vary: Accept-Encoding                                           - Определяет, как сопоставлять заголовки запросов
```

### Github

```shell
Connected to github.com (140.82.121.3) port 443 (#0)
using HTTP/1.x
GET / HTTP/1.1
Host: github.com
User-Agent: curl/8.1.2
Accept: */*

HTTP/1.1 200 OK
 Server: GitHub.com
 Date: Thu, 07 Sep 2023 09:35:10 GMT
 Content-Type: text/html; charset=utf-8
 Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With
 content-language: en-US
 ETag: W/"f1f00e2684aaf25183523de15724ee1e"
 Cache-Control: max-age=0, private, must-revalidate
 Strict-Transport-Security: max-age=31536000; includeSubdomains; preload    - Принудительное подключение с использованием HTTPS вместо HTTP.
 X-Frame-Options: deny
 X-Content-Type-Options: nosniff
 X-XSS-Protection: 0
```

### RZD (don`t works)

```shell
> GET / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: curl/8.0.1
> Accept: */*
> 
< HTTP/1.1 403 Forbidden
< Connection: close
< Content-Length: 109
< Content-Type: text/html
< 
* Closing connection 0
* TLSv1.2 (IN), TLS alert, close notify (256):
* TLSv1.2 (OUT), TLS alert, close notify (256):
```

### Yandex (don`t works)

```shell
> GET / HTTP/2
> Host: yandex.ru
> user-agent: curl/8.0.1
> accept: */*
> 
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
< HTTP/2 302 
< location: https://dzen.ru/?yredirect=true
< date: Thu, 14 Sep 2023 08:02:26 GMT
< nel: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}
< x-content-type-options: nosniff
< portal: Home
< set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Sat, 13 Sep 2025 08:02:26 GMT
< set-cookie: is_gdpr_b=COj6IhCrzgEoAg==; Path=/; Domain=.yandex.ru; Expires=Sat, 13 Sep 2025 08:02:26 GMT
< set-cookie: _yasc=0ZYqrHVyO4JVJx5CYp0GtihUnL/M4sVCRpm0kzW1ouHWkSGeakSBWHhLCqKZvIm4EQRA; domain=.yandex.ru; path=/; expires=Sun, 11 Sep 2033 08:02:26 GMT; secure
< set-cookie: i=KN41DXBHLWUeE7M97YI93Hd3t0OV/Vcczie4f4wjb2zOzJJTo7EtkxUeVV8b49VVxraYamVJUuR1/C8eV/Bxst9PVo8=; Expires=Sat, 13-Sep-2025 08:02:26 GMT; Domain=.yandex.ru; Path=/; Secure; HttpOnly
< set-cookie: yandexuid=3567004161694678546; Expires=Sat, 13-Sep-2025 08:02:26 GMT; Domain=.yandex.ru; Path=/; Secure
< p3p: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
< x-yandex-req-id: 1694678546304616-2376763490956700416-balancer-l7leveler-kubr-yp-sas-150-BAL-8661
< accept-ch: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT
< report-to: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
< cache-control: max-age=1209600,private
< x-robots-tag: unavailable_after: 12 Sep 2022 00:00:00 PST
< 
* Connection #0 to host yandex.ru left intact
```

### Python

```shell
> GET / HTTP/2
> Host: www.python.org
> user-agent: curl/8.0.1
> accept: */*
> 
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
< HTTP/2 200 
< server: nginx
< content-type: text/html; charset=utf-8
< x-frame-options: SAMEORIGIN
< via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< accept-ranges: bytes
< date: Thu, 14 Sep 2023 08:05:26 GMT
< age: 1996
< x-served-by: cache-iad-kiad7000025-IAD, cache-fra-eddf8230106-FRA
< x-cache: HIT, HIT
< x-cache-hits: 9, 7
< x-timer: S1694678726.390360,VS0,VE0
< vary: Cookie
< strict-transport-security: max-age=63072000; includeSubDomains; preload
< content-length: 50214
```

### Saint git

```shell
> GET / HTTP/2
> Host: git-scm.com
> user-agent: curl/8.0.1
> accept: */*
> 
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
< HTTP/2 200 
< date: Thu, 14 Sep 2023 08:07:36 GMT
< content-type: text/html; charset=utf-8
< x-frame-options: SAMEORIGIN
< x-xss-protection: 1; mode=block
< x-content-type-options: nosniff
< x-download-options: noopen
< x-permitted-cross-domain-policies: none
< referrer-policy: strict-origin-when-cross-origin
< cache-control: public, max-age=14400
< etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< x-request-id: 5b655b2f-128f-4205-940e-13860b4aaf19
< x-runtime: 0.008824
< via: 1.1 vegur
< cf-cache-status: HIT
< age: 12785
< server: cloudflare
< cf-ray: 806723280e154c84-HEL
```

### Jetbrains

```shell
< HTTP/2 200 
< content-type: text/html; charset=utf-8
< content-length: 47213
< date: Thu, 14 Sep 2023 08:07:00 GMT
< server: nginx
< x-content-type-options: nosniff
< referrer-policy: same-origin
< expires: Thu, 14 Sep 2023 08:07:00 GMT
< cache-control: max-age=0
< pragma: no-cache
< x-frame-options: DENY
< x-content-type-options: nosniff
< x-xss-protection: 1; mode=block
< strict-transport-security: max-age=31536000;
< vary: Accept-Encoding
< via: 1.1 67b26e58a581719aff39a51e79faf096.cloudfront.net (CloudFront)
< alt-svc: h3=":443"; ma=86400
< age: 92
< set-cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure
< x-cache: Hit from cloudfront
< x-amz-cf-pop: WAW51-P2
< x-amz-cf-id: K45sdod9RX_Vf9Cks3fZONvwYTYKGa_YcXolch6wEZ0LyQKY1QVkMA==
```
