class Solution:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []
    def push(self, node):
        # write code here
        self.stack1.append(node)
    def pop(self):
        # return xx
        if len(self.stack2) == 0:
          while len(self.stack1):
            node = self.stack1.pop()
            self.stack2.append(node)
          return self.stack2.pop()
        
        return self.stack2.pop()

a = Solution()
a.push(1)
a.push(2)
print(a.pop())
a.push(4)
a.push(6)
print(a.pop())
print(a.pop())
print(a.pop())