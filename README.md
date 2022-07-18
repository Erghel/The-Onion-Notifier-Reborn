# The Onion Notifier Reborn (TON-R)

Shows a notification if the website you visit also offers a ``.onion`` domain. Click the notification to navigate to the ``.onion`` domain.

Available in Tor Browser or with Tor-proxy enabled on the local address.

# How do I set up a local Tor-proxy?
- Download Tor Browser from the official site ``torproject.org``
- Launch the browser and click ``Connect``
- Go to the browser through which you want to open ``.onion`` domains
- Download an extension which lets you set up custom proxies 
- Create a proxy profile there with ``127.0.0.1:9150`` or ``127.0.0.1:9050``
- ``Connect`` to this profile

For Firefox it is also important to go into ``about:config``, type ``network.dns.blockDotOnion`` and change the value to ``false``.

That's it, you're ready to open ``.onion`` sites.

**This software is not affiliated with or endorsed by ``The Tor Project``**.
