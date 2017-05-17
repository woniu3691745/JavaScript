# 盒子模型尺寸 = 边框 + 外边距 + 内边距 + 盒子中的内容尺寸
# 浮动float:
    特点：1、元素会左移，或右移，直到触碰到容器为止；
         2、紧临后面的元素会受到影响；
# 清除浮动:
    1、clear属性 - 常用 clear:both; clear:left; 或则 clear:right; #紧临后面的元素
    2、同时设置width:100%(或固定宽度) + owerflow:hidden; #移除属性
# position属性
    拥有3种定位形式：1.静态定位 2.相对定位 3绝对定位
    可设置4个属性值：
        1）static （静态定位）
        2）relative （相对定位）
        3）absolute （绝对定位）- 相对于祖先
        4）fixed （固定定位）