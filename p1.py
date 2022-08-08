# 计算回文字符串


def leftRi (d, pointer, sep):
    l = len(d)
    if(pointer < 0 or pointer > (l - 1) or (pointer - sep) < 0 or (pointer + sep) > l):
        return (0, 0)
    left = d[(pointer - sep):pointer]
    right = d[pointer : (pointer + sep)]
    return (left, right)

def reverse(d):
    strList = list(d)
    strList.reverse()
    return ''.join(strList)

def main(d):
    pointer = 1 # 指针
    sep = 1 # 对称部分单边的宽度
    l = 1
    max = 0
    while pointer < len(d):
        while (((pointer - sep) >= 0) and ((pointer + sep) <= len(d))):
            left, right = leftRi(d, pointer, sep)
            if(left and right and left == reverse(right)):
                if(max < sep * 2):
                    max = sep * 2
                sep +=1
            else:
                break
        pointer +=1
        sep = 1
    return max


if __name__ == '__main__':
    while True:
        str = input('>>>')
        print(main(str))
