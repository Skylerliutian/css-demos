#!/bin/bash
nginx

# 打开一个挂起的进程，否则docker会关闭
tail -f /dev/null
# /bin/bash