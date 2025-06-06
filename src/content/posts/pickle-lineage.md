---
title: 适用于OnePlus Ace的LineageOS
published: 2025-06-06
description: '适用于OnePlus Ace的LineageOS，LineageOS是一个基于Android的开源操作系统，旨在为用户提供更加纯净、安全和可定制的使用体验。本文将介绍如何在OnePlus Ace设备上安装和体验LineageOS。'
image: ''
tags: [Android,LineageOS,pickle]
category: 'Android'
---

:::poem{title="《鹿柴》" author="王维"}
空山不见人，但闻人语响。
返景入深林，复照青苔上。
:::

这是一个适用于OnePlus Ace的LineageOS
:::important
此ROM未在RealmeGtNeo3系列及OnePlus10R系列测试，且不接收来自此系列机型的Bug反馈
:::

截图及下载链接在文章末尾

---
ROM信息:

设备: OnePlus Ace/PGKM10

底包： ColorOS15.0.0.700/800

Android版本：15

LineageOS版本：22.2 | UNOFFICIAL

构建类型: usedebug

Buildtag: test-keys

---
已知bug:
- dt2w
- 请你告诉我

如何反馈bug？

留言在此文章评论或酷安评论区即可

---
下载

[点击跳转HF|DN](https://dl.wzwzx.cn/huif)

---
如何刷入？ 很重要！请仔细看完再进行操作
- 下载ROM包、boot、vendor_boot
- 确保自己已处于ColorOS15
- 重启至bootloader刷入boot以及vendor_boot
```
fastboot flash boot_a boot.img
fastboot flash boot_b boot.img
fastboot flash vendor_boot_a vendor_boot.img
fastboot flash vendor_boot_b vendor_boot.img
```
- 重启至recovery
``` fastboot reboot recovery```
- 在Recovery中刷入ROM，手机进入rec后点击Apply upddate -> from ADB
``` adb sideload xxx.zip```
:::important
如果您在OnePlus Ace刷入了OxygenOS，则需要在刷入LineageOS之前按照以下步骤操作

如果您现在已处于OxygenOS 15/14/13，则需要回滚到 OxyegnOS 12 并切换回 ColorOS 12

使用回滚包刷回OxygenOS12

回到OxygenOS12后，再刷入ColorOS12

刷入ColorOS 12后，锁定Bootloader

更新到最新的ColorOS 15并解锁Bootloader

现在你有一个完全可以工作的Bootloader

需要的降级包可在[大侠阿木](https://yun.daxiaamu.com/OnePlus_Roms/%E4%B8%80%E5%8A%A0OnePlus%20Ace/)下载
:::

---
截图
![1000000026.png](https://img.picui.cn/free/2025/06/06/6842f89008ea4.png)
![1000000027.png](https://img.picui.cn/free/2025/06/06/6842f89039a85.png)
![1000000025.png](https://img.picui.cn/free/2025/06/06/6842f8904fcac.png)
![1000000031.png](https://img.picui.cn/free/2025/06/06/6842f8900b4dd.png)
![1000000030.png](https://img.picui.cn/free/2025/06/06/6842f88ff12f8.png)

---