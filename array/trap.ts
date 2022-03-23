//42. 接雨水

//按层遍历
//每一层能接到的水，等于高度大于等于该层的每两个柱子之间的空隙
function trap1(height: number[]): number {
    let res = 0
    let l = 1
    const max = findMax(height)
    while (l <= max) {
        let num = 0
        let i = 0
        let j = 0
        while (j < height.length && i < height.length) {
            if (height[i] - l < 0 || height[i + 1] - l >= 0) {
                i++
            }
            if (height[i] - l >= 0 && height[j] - l >= 0 && j - i > 1) {
                num += j - i - 1
                i = j
            }
            if (height[i] - l >= 0 && (height[j] - l < 0 || j - i <= 1)) {
                j++
            }
        }
        res += num
        l++
    }
    return res
    function findMax(nums: number[]): number {
        let max = -Infinity
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i]
            }
        }
        return max
    }
}

//按列遍历
//根据木桶原理，将该柱子视为底，左右两边最高的柱子则为桶的两边
//所以每一列能接到的水等于左右两边的矮边减去柱子当前高度，前提是左右两边有高于当前高度的柱子能形成桶
function trap2(height: number[]): number {
    const n = height.length
    let res = 0
    //头尾两个柱子必定接不到水
    for (let i = 1; i < n - 1; i++) { 
        let max_left=0
        let max_right = 0
        for (let j = i - 1; j >= 0; j--) { 
            max_left = Math.max(max_left,height[j])
        }
        for (let j = i + 1; j < n; j++) { 
            max_right = Math.max(max_right,height[j])
        }
        const min = Math.min(max_left, max_right)
        if (min > height[i]) { 
            res+=(min-height[i])
        }
    }
    return res
};

//上一个解法的缺点：每一列都需要遍历整个数组去找寻左右两边的最大值
//可以通过一次遍历事先计算好每一列的左右最大值
function trap3(height: number[]): number {
    const n = height.length
    let res = 0
    const max_left:number[]=Array(n).fill(0)
    const max_right:number[] = Array(n).fill(0)
    for (let i = 1; i < n - 1; i++) { 
        max_left[i] = Math.max(max_left[i-1],height[i-1])
    }
    for (let i = n-2; i >=0; i--) { 
        max_right[i] = Math.max(max_right[i+1],height[i+1])
    }
    for (let i = 1; i < n - 1; i++) { 
        const min = Math.min(max_left[i], max_right[i])
        if (min > height[i]) { 
            res+=(min-height[i])
        }
    }
    return res
};

//因为遍历是从左往右开始的，所以左侧的最大值可以在遍历时维护
//不需要提前计算，且能节省空间
function trap4(height: number[]): number {
    const n = height.length
    let res = 0
    let max_left = height[0]
    const max_right:number[] = Array(n).fill(0)
    for (let i = n-2; i >=0; i--) { 
        max_right[i] = Math.max(max_right[i+1],height[i+1])
    }
    for (let i = 1; i < n - 1; i++) { 
        const min = Math.min(max_left, max_right[i])
        if (min > height[i]) { 
            res+=(min-height[i])
        }
        max_left = Math.max(max_left,height[i])
    }
    return res
};

//单调栈
function trap5(height: number[]): number {
    let res = 0;
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = <number>stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            res += currWidth * currHeight;
        }
        stack.push(i);
    }
    return res;
};