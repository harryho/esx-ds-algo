export class BinaryTree
{

        constructor(){
            this._root = null;
            this._count = 0;
        }
            
        add(value)
        {
            // Case 1: The tree is empty - allocate the head
            if (this._root == null)
            {
                this._root = new BinaryTreeNode(value);
            }
            // Case 2: The tree is not empty so find the right location to insert
            else
            {
                this.addTo(this._root, value);
            }

            this._count++;
        }

        // Recursive add algorithm
        addTo(node, value)
        {
            // Case 1: Value is less than the current node value
            // if (value.compareTo(node.value) < 0)
            if (node.compareTo(value) > 0 )
            {
                // if there is no left child make this the new left
                if (node.left == null)
                {
                    node.left = new BinaryTreeNode(value);
                }
                else
                {
                    // else add it to the left node
                    this.addTo(node.left, value);
                }
            }
            // Case 2: Value is equal to or greater than the current value
            else
            {
                // If there is no right, add it to the right
                if (node.right == null)
                {
                    node.right = new BinaryTreeNode(value);
                }
                else
                {
                    // else add it to the right node
                    this.addTo(node.right, value);
                }
            }
        }
        

        
        contains(value)
        {
            // defer to the node search helper function.
            let {current, parent} = this.findWithParent(value, parent)
            return current != null;
        }

        findWithParent(value)
        {
            // Now, try to find data in the tree
            let current = this._root;
            let parent = null;

                // while we don't have a match
            while (current != null)
            {
                let result = current.compareTo(value);

                if (result > 0)
                {
                    // if the value is less than current, go left.
                   parent = current;
                    current = current.left;
                }
                else if (result < 0)
                {
                    // if the value is more than current, go right.
                   parent = current;
                    current = current.right;
                }
                else
                {
                    // we have a match!
                    break;
                }
            }

            return {current: current, parent:parent};
        }
      
        remove(value)
        {
            // current, parent;

            let {current, parent} = this.findWithParent(value)

            if (current == null)
            {
                return false;
            }

            this._count--;

            // Case 1: If current has no right child, then current's left replaces current
            if (current.right == null)
            {
                if (parent == null)
                {
                    this._root = current.left;
                }
                else
                {
                    let result = parent.compareTo(current.value);
                    if (result > 0)
                    {
                        // if parent value is greater than current value
                        // make the current left child a left child of parent
                        parent.left = current.left;
                    }
                    else if (result < 0)
                    {
                        // if parent value is less than current value
                        // make the current left child a right child of parent
                        parent.right = current.left;
                    }
                }
            }
            // Case 2: If current's right child has no left child, then current's right child
            //         replaces current
            else if (current.right.left == null)
            {
                current.right.left = current.left;

                if (parent == null)
                {
                    this._root = current.right;
                }
                else
                {
                    let result = parent.compareTo(current.value);
                    if (result > 0)
                    {
                        // if parent value is greater than current value
                        // make the current right child a left child of parent
                        parent.left = current.right;
                    }
                    else if (result < 0)
                    {
                        // if parent value is less than current value
                        // make the current right child a right child of parent
                        parent.right = current.right;
                    }
                }
            }
            // Case 3: If current's right child has a left child, replace current with current's
            //         right child's left-most child
            else
            {
                // find the right's left-most child
                let leftmost = current.right.left;
                let leftmostParent = current.right;
                
                while (leftmost.left != null)
                {
                    leftmostParent = leftmost;
                    leftmost = leftmost.left;
                }

                // the parent's left subtree becomes the leftmost's right subtree
                leftmostParent.left = leftmost.right;

                // assign leftmost's left and right to current's left and right children
                leftmost.left = current.left;
                leftmost.right = current.right;

                if (parent == null)
                {
                    this._root = leftmost;
                }
                else
                {
                    let result = parent.compareTo(current.value);
                    if (result > 0)
                    {
                        // if parent value is greater than current value
                        // make leftmost the parent's left child
                        parent.left = leftmost;
                    }
                    else if (result < 0)
                    {
                        // if parent value is less than current value
                        // make leftmost the parent's right child
                        parent.right = leftmost;
                    }
                }
            }

            return true;
        }        

        preOrderTraversal(action)
        {
            this._preOrderTraversal(action, this._root);
        }

        _preOrderTraversal(action, node)
        {
            if (node != null)
            {
                action(node.value);
                this._preOrderTraversal(action, node.left);
                this._preOrderTraversal(action, node.right);
            }
        }       

        postOrderTraversal(action)
        {
            this._postOrderTraversal(action, this._root);
        }

        _postOrderTraversal(action, node)
        {
            if (node != null)
            {
                this._postOrderTraversal(action, node.left);
                this._postOrderTraversal(action, node.right);
                action(node.value);
            }
        }      

        inOrderTraversal(action)
        {
            this._inOrderTraversal(action, this._root);
        }

        _inOrderTraversal(action, node)
        {
            if (node != null)
            {
                this._inOrderTraversal(action, node.left);

                action(node.value);

                this._inOrderTraversal(action, node.right);
            }
        }

       /** 
        * Enumerates the values contains in the binary tree in in-order traversal order.
        * @return generator
        */
        * _inOrderIterate()
        {
            // console.log('_inOrderTraversal', this._root)
            // This is a non-recursive algorithm using a stack to demonstrate removing
            // recursion to make using the yield syntax easier.
            if (this._root != null)
            {
                // store the nodes we've skipped in this stack (avoids recursion)
                let stack = [] // new Stack<BinaryTreeNode>();

                let current = this._root;

                // when removing recursion we need to keep track of whether or not
                // we should be going to the left node or the right nodes next.
                let goLeftNext = true;

                // start by pushing Head onto the stack
                stack.push(current);

                while (stack.length > 0)
                {
                    // If we're heading left...
                    if (goLeftNext)
                    {
                        // push everything but the left-most node to the stack
                        // we'll yield the left-most after this block
                        while (current.left != null)
                        {
                            stack.push(current);
                            current = current.left;
                        }
                    }
                    // in-order is left->yield->right
                    yield  current.value;

                    // if we can go right then do so
                    if (current.right != null)
                    {
                        current = current.right;

                        // once we've gone right once, we need to start
                        // going left again.
                        goLeftNext = true;
                    }
                    else
                    {
                        // if we can't go right then we need to pop off the parent node
                        // so we can process it and then go to it's right node
                        current = stack.pop();
                        goLeftNext = false;
                    }
                }
            }
        } 

  
        iterator()
        {
            return this._inOrderIterate();
        }
        

      
        clear()
        {
            this._root = null;
            this._count = 0;
        }

        
        get count()
        {
            return this._count;
        }
        
    }

