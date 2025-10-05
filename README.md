## Blog

[![stable](https://img.shields.io/badge/stability-stable-green)](https://www.aimtao.net)  [![CI](https://img.shields.io/badge/CI-passing-green)](https://www.aimtao.net/github-action-oss/)

个人博客：[https://www.aimtao.net](https://www.aimtao.net)

本博客双线部署在 `阿里的OSS` 和 `GitHub Page` 上，并用于国内外分流。

​    



## Process

1. 将 `Hexo` 的源文件 `push` 到 github 的私有库。

   ```sh
   blog
   ├── scaffolds
   ├── source
   ├── themes
   ├── package.json
   ├── .gitignore
   └── _config.yml
   ```

2. 利用  `Github Action` 构建静态文件

3. 一份推送到 [此库](https://github.com/AimTao/aimtao.github.io) 中，一份上传到 `OSS` 的桶里，并实现 CDN 加速。

​    



## Feel

此解决方案自以为堪称完美，只需将源文件 `pull` 到本地，（源文件总大小不到1M），写完再 `push`  就可以了。

当然一直在本地保留版本库也ok，完全不占空间，写完直接 `psuh`，堪称一键部署啊。

​    



## Defect

唯一一点点缺陷在于，通过  `Github Action`  构建后，推送到此库时，因为CI的虚拟机新构建的文件的 `master` 分支 和  库中的 `master` 分支是毫不相干的两个分支。

而它的策略不是 `merge` ，是直接做 `reset` ，（也可能是`git push -f` ），撤销所有版本库，，当然也就清空所有 `commit` 记录。（不过无伤大雅）

​    

## Last

拒绝花里胡哨，正经学习才是王道。🚀🚀🚀

