# 2.0.0

Relax the peer dependencies such that it can be used with Webpack 2 & 3. Note that this does NOT add *official* support 
for Webpack 2+ (2+ still shouldn't need this plugin).

# 1.0.6
- Add node engine requirement to package.json
- Deprecate plugin, since this is default behaviour in Webpack 2+  

# 1.0.5
- Detect watch mode through the `run` hook instead of parsing CLI arguments, such that the detection works for all different watch methods (#4)
