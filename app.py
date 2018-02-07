
# coding: utf-8

# In[ ]:


from flask import Flask, render_template

app = Flask(__name__)
@app.route('/',methods=['GET'])
def web():
    return render_template('chartAnalysis.html')
    
if __name__=='__main__':
    app.run(host='0.0.0.0' , port=7070)

