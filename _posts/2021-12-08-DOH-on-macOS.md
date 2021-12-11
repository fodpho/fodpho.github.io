---
title:  "DNS-over-https (DoH) on macOS"
date:   2021-12-08 00:00:01
toc: true
toc_sticky: true
tags: [tools,privacy]
---

DoH and enabling DoH on macOS using the client provided by Cloudflare.

## Why DoH?

Computers, phones, routers, and servers require IP addresses to communicate with each other, however, in most cases, human and machines use *hostnames* instead of IP addresses. Therefore, a "phone book" that translates the hostnames like `google.com`, `example.com` to the corresponding IP addresses is required. Such system is called the **Domain Name System**, or DNS. Traditional DNS sends the hostname to the name server (usually local ISPs) ans waits for the returning IP address. This poses a huge security and privacy issue since the process is not encrypted and can be monitored and altered by hackers or ISPs. One remedy is to choose a trustworthy name server and encrypt the transmission by using safer protocols like dns-over-https (DoH). This post is about implementing DoH on macOS.

## Some DoH providers

| Provider | URL |
|:--|:--|
| Google | https://dns.google/dns-query |
| Cloudflare| https://cloudflare-dns.com/dns-query |
| Cisco OpenDNS | https://doh.opendns.com/dns-query |

## Using DoH

### On browsers

The easiest way to use DoH is by changing network setting in the browser, Firefox, Google Chrome, and Microsoft Edge all have the option to enable DoH. Unfortunately, DoH is not an available option in Safari at present.

### System-wide

To really make Safari safer to use, one solution is to use [Cloudflare WARP](https://cloudflarewarp.com/), it acts like an all-in-one VPN and is free to use.  
Another more technical way is by using the `cloudflared` client provided by Cloudflare. To do that, follow the instructions below.

1. Install `cloudflared` using homebrew

   ```bash
   brew install cloudflare/cloudflare/cloudflared
   ```

2. Create `/usr/local/etc/cloudflared/config.yaml`, with the following content:

   ```yaml
   proxy-dns: true
   proxy-dns-upstream:
     - https://1.1.1.1/dns-query
     - https://1.0.0.1/dns-query
   ```

3. Activate cloudflared as a service.

   ```bash
   sudo cloudflared service install
   ```

   It will forward dns requrets on `localhost:53` to the server specified above.

4. Test the dns.

   ```bash
   dig +short @127.0.0.1 cloudflare.com AAAA
   ```

5. If there is a valid output, the installation is successful. Change the system dns setting to 127.0.0.1 (System Preferences->Network->Advanced->DNS) and everything is done.

6. To restart the service, 

   ```bash
   sudo cloudflared service uninstall
   sudo cloudflared service install
   ```
   
## Reference and more information
- <https://en.wikipedia.org/wiki/Domain_Name_System>
- <https://en.wikipedia.org/wiki/DNS_hijacking>
- <https://developers.google.com/speed/public-dns/docs/doh/>
- <https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/dns-over-https-client>
- <https://support.opendns.com/hc/en-us/articles/360038086532-Using-DNS-over-HTTPS-DoH-with-OpenDNS>
