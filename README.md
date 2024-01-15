# TP-Link AC 客户端列表

对 TP-Link AC 无线控制器的客户端列表的再包装，变得更加好看。同时识别出设备 Mac 对应的厂商。在 TL-AC100 上测试成功。

[tplink-ac-clients.rwv.dev](https://tplink-ac-clients.rwv.dev)

## 截图

![截图](https://raw.githubusercontent.com/rwv/tplink-ac-clients/main/screenshot.png)

## 使用方法

需要有后台服务器反代 TP-Link AC 无线控制器的管理页面并正确设置 CORS，以 Caddy 为例：

```
ac.example.com {
    encode zstd gzip

    @options method OPTIONS
    handle @options {
        header Access-Control-Allow-Origin *
        header Access-Control-Allow-Methods *
        header Access-Control-Allow-Headers *
        header Access-Control-Allow-Credentials true
        respond "" 204
    }

    reverse_proxy * {
        to http://192.168.1.100
        header_down Access-Control-Allow-Origin *
        header_down Access-Control-Allow-Methods *
        header_down Access-Control-Allow-Headers *
        header_down Access-Control-Allow-Credentials true
    }

    tls {
        dns cloudflare {env.CLOUDFLARE_API_TOKEN}
    }
}
```

然后在设置界面填入对应的地址、账号、密码即可。全前端所以无需担心账号密码泄露。

不过用 Caddy 的话就涉及到 HTTPS 证书和域名的问题，目前我是使用 dns 的方式给内网 Caddy 服务器颁发证书。当然也可以使用全 HTTP 的方式，但我懒得写了。

还有一个办法是反代 https://tplink-ac-clients.rwv.dev 并将 AC 控制器反代到 `/api` 下，也可以规避掉 CORS 的问题。
