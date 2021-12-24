---
title:  "Using Tor on Debian"
date:   2021-12-11
toc: true
toc_sticky: true
tags: [privacy]
---


Although the recommended way to access Tor network is through Tor browser, it is possible to set Tor on Linux and use it as a proxy.

## Disclaimer
The maintainer of the website gives no warranty and accepts no responsibility or liability for the accuracy or the completeness of the information and materials contained in this post.  
**Tor (or Tor browser) can only protect your privacy if you use it in the right way.**

## Definitions
- [Tor](https://en.wikipedia.org/wiki/Tor_(network)): short for **The Onion Router**, a free and open-source software for anonymous communication. On most Linux distros, it can be obtained from the default package manager (apt, pacman, etc.) and acts like a SOCKS proxy. Other applications like the browser can use the proxy port opened by Tor to access the onion network.
- Onion network: Also known as *The Dark Web*, websites on the onion network can only be accessed through Tor, those websites can be identified by the domain `.onion`. The most convenient way of accessing onion websites is through the Tor browser.
- [Tor browser](https://www.torproject.org/download/): The flagship product of the Tor project, available on multiple platforms. It is built on Firefox ESR with Tor enabled and many other privacy protecting measures implemented.  

In short, if browsing onion websites is all you want, then Tor browser is the right choice, there is no need to install Tor separately and you can **stop** reading this post.

## Using Tor

On Debian based distros, install Tor using the following command.

```bash
sudo apt install tor
```

Edit `/etc/tor/torrc`, uncomment the line `SocksPort 9050`, 9050 here is the port opened by Tor, it can be changed to other values. Save the file and the tor service can be started. To monitor the status of the service, the command `journalctl` can be used. Type the following command in the terminal. It will show the system journal containing the word `bootstrapped` in real time.

```bash
sudo journalctl -f -u tor@default | grep bootstrapped -i
```

Then open a new terminal window and start the Tor service.

```bash
sudo systemctl start tor
```

The `journalctl` output is shown in the following GIF image.

![journalctl](/assets/images/20211211/journalctl.gif)

After the starting process is done, one can access the onion network by using the proxy at `127.0.0.1:9050` (suppose the port is still 9050).

### Using bridges

Sometimes the direct Tor access is limited or even censored by the ISPs, in this case, [Tor bridges](https://support.torproject.org/censorship/censorship-7/) can be used. Bridges are Tor relays that are not listed in the Tor directory, they are just normal Tor relays with a slightly different configuration, but are useful when fighting against the censorship of ISPs or governments. To use Tor bridges, first install obfs4 package on the system, on Debian based distros, the command is.

```bash
sudo apt install obfs4proxy
```

The next step is getting safe and reliable bridges, there are several ways to do that.

* Ask for a private bridge by sending an email with the phrase "private bridge" in the subject to <mailto:frontdesk@torproject.org>. OR
* Get bridges from the [BridgeDB](https://bridges.torproject.org/bridges?transport=obfs4). OR
* Build your own bridges by following the guide on [Tor FAQ site](https://community.torproject.org/relay/setup/bridge/).

The bridges link look like this.

```
obfs4 <IP_ADDRESS>:<PORT> <FINGERPRINT> cert=<CERTIFICATE> iat_mode=<IAT_MODE>
```

where FINGERPRINT is a 40-character long string, which is the specifier of the bridge, CERTIFICATE is used to authenticate the bridge, and IAT_MODE stands for inter-arrival time, which is a anti-detection technique, 0 means disabled, 1 and 2 means enabled but they differ in the way larger packets are spitted.  

[//]: # (the meaning of iat_mode and the source are required.)

To test whether the bridges are usable, search the bridge by using the 40-character long fingerprint on the [Relay search website](https://metrics.torproject.org/rs.html#search), more information about the bridges can be obtained from the search result.  
After verifying the bridge, add the following lines to the end of `/etc/tor/torrc/`. (Replace the corresponding fields with the bridge information)

```
UseBridges 1
ClientTransportPlugin obfs4 exec /usr/bin/obfs4proxy managed

bridge obfs4 <IP_ADDRESS>:<PORT> <FINGERPRINT> cert=<CERTIFICATE> iat_mode=<IAT_MODE>
bridge obfs4 <IP_ADDRESS>:<PORT> <FINGERPRINT> cert=<CERTIFICATE> iat_mode=<IAT_MODE>
bridge obfs4 <IP_ADDRESS>:<PORT> <FINGERPRINT> cert=<CERTIFICATE> iat_mode=<IAT_MODE>
```

Then start/restart Tor service, it is always a good practice to monitor the system journal when starting it.

```bash
sudo systemctl restart tor
```

## More Information

Always search more and read more to understand what you are going to do.

- <https://support.torproject.org/faq/>
- <https://metrics.torproject.org/about.html>
- <https://nyx.torproject.org/>
