---
layout: page
title: "Use Proton to run any game (also non-Steam games) on Linux"
permalink: /linux/proton-any
---

This article explains how to run _any_ Windows game, also non-Steam games, under Linux using [Proton](https://github.com/ValveSoftware/Proton/).

[Proton](https://github.com/ValveSoftware/Proton/) is a software that allows you to run Windows games on Linux. It is developed by Valve.

It is essentially a "Wine distribution", in the sense that it uses Wine in the background, but it is enhanced.

The Wine version that comes with it has been compiled with parameters that enhances speed. Most importantly, the wined3d stack, which translates DirectX calls to OpenGL, has been substituted. If the game runs on DirectX 9/10/11, [DXVK](https://github.com/doitsujin/dxvk) is used to translate DirectX calls to Vulkan. If the game runs on DirectX 12, [VKD3D](https://github.com/d3d12/vkd3d) will translate DirectX calls to Vulkan. These implementations are much much faster than the native ones.

Although Proton is "normally" used by Steam to run games downloaded by Steam itself, you can ticker with it to run any game you wish. For example, I am running Overwatch (downloaded through Battle.net) using Proton.

Here is a concept of proof on how you can use Proton to run any game.

We won't be compiling Proton from sources. Instead, we will use the pre-compiled package that comes with Steam. So, first of all, download [Steam](https://store.steampowered.com/), run it, and have it download a version of Proton.

1. Locate Proton folder. This usually will be a sub-folder under `$HOME/.local/share/Steam/steamapps/common`. 
In this folder you can find different versions of Proton, each in its own subfolder. 
Choose a version of Proton (most likely you will want the most recent one). 
In this example we will use Proton 5.11. 
Copy the "Proton 5.11" subfolder somewhere else, let's say in `$HOME/bin/Proton`

2. Open `$HOME/bin/Proton/proton` (it's a Python 3 script) and comment out the line

    `self.env["WINEPREFIX"] = g_compatdata.prefix_dir` 

    by putting a # before it. We don't want Proton to run the above line. We will provide our own `WINEPREFIX`.
    
3. Locate Steam's COMPATDATA folder. 
This usually will be a subfolder of `$HOME/.local/share/Steam/steamapps/compatdata`. 
In that folder you will find different subfolders whose names are made up entirely by numbers. 
This number-only subfolders are COMPATDATA folder. 
For example, the COMPATDATA subfolder could be `$HOME/.local/share/Steam/steamapps/compatdata/123456`. 
Substitute the last part with your own number. In case multiple numbered folders show up, choose the highest number.

4. _VERY IMPORTANT_: if you have more than one graphics card, for instance integrated and dedicated (like most laptops), 
DXVK require you to specify which one to use (you will want to use the dedicated one). 
See [DXVK README](https://github.com/doitsujin/dxvk#device-filter) on how to achieve this. Basically run:

    `vulkaninfo | grep "GPU id :"`

    you will obtain an output like:

    > GPU id : 0 (GeForce AAA 1234):
    >
    > GPU id : 1 (Intel(R) Graphics 123):

    The name in parentheses are the names of your graphic cards. 
    Choose one for DXVK. We will choose the NVIDIA GeForce one in this example. 
    DXVK can match sub-strings! So it is sufficient to use "GeForce". 
    This is non-ambiguous and DXVK as said can match on sub-strings. So it will know which one to use.

5. Choose a WINEPREFIX (basically a location) in which to install your game _specifically for games unde Proton_.
It is best if you don't mix up this prefix with the prefix you use for vanilla wine (although I didn't experience any problems in doing so).
A prefix for our games run in Proton could be `$HOME/.wine_proton`.

7. Here is a concept of proof of the script to run your game using Proton. 
__SUBSTITUTE THE VARIABLES AT THE START OF THE SCRIPT WITH THE VALUES YOU FOUND IN THE PREVIOUS POINTS__.
        #!/usr/bin/env bash
        
        # Modify these
        export DXVK_FILTER_DEVICE_NAME="GeForce"
        protonfolder="$HOME/bin/Proton"
        export STEAM_COMPAT_DATA_PATH="$HOME/.local/share/Steam/steamapps/compatdata/123456"
        
        # Modify if needed
        export WINEPREFIX=$HOME/.wine
        
        # This should be fine for most users
        sudo sysctl dev.i915.perf_stream_paranoid=0
        "$protonfolder"/proton run "$1"
        
    Save it somewhere and name it `launch_proton.sh`. 
    Make it executable:
    
    `chmod +x launch_proton.sh`

    Call it like this: `./lunch_proton.sh game.exe`.

    The script needs sudo privileges due to the line 
    
    `sudo sysctl dev.i915.perf_stream_paranoid=0`
    
    which improves performances. 
    If you remove this line, the script will run _without_ sudo privileges.

Enjoy your Windows game running on Linux using Proton!
