#!/bin/bash

# Clean remote payload directory on server
ssh $SSH_USER@$SSH_HOST "rm payload/_run.sh && rm -rf payload/build payload/dist"

# Move output into remote payload directory on server
scp -r ./output/* $SSH_USER@$SSH_HOST:/home/$SSH_USER/payload

# Run or reload the new build
ssh $SSH_USER@$SSH_HOST "cd payload && chmod +x ./_run.sh && ./_run.sh"
