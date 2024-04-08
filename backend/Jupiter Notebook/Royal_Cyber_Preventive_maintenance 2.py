#!/usr/bin/env python
# coding: utf-8

# In[1]:


from reliability.Distributions import Weibull_Distribution
from reliability.Fitters import Fit_Weibull_2P
from reliability.Fitters import Fit_Weibull_3P
from reliability.Probability_plotting import plot_points
from reliability.Fitters import Fit_Everything
from reliability.Reliability_testing import KStest
import matplotlib.pyplot as plt
from reliability.Other_functions import make_right_censored_data, histogram
from reliability.Reliability_testing import KStest
from reliability.Repairable_systems import optimal_replacement_time
import pandas as pd
import numpy as np
import json


# ## Step 1: Generating synthetic data

# In[60]:


# # Set a random seed for reproducibility
# np.random.seed(42)

# # Define the Weibull distribution parameters
# alpha = 250
# beta = 1.50

# # Generate random samples from the Weibull distribution
# data_weibull = Weibull_Distribution(alpha=alpha, beta=beta).random_samples(100)

# # Add Gaussian noise to the generated Weibull data
# mean = 0  # Mean of the Gaussian noise
# std_dev = 3  # Standard deviation of the Gaussian noise
# noise = np.random.normal(mean, std_dev, size=len(data_weibull))
# data_with_noise = data_weibull + noise
# data_with_noise=data_with_noise.astype(int)


# In[70]:


# df = pd.DataFrame(data_with_noise, columns=['Failure Data'])

# # Specify the Excel file name
# excel_file = 'Equipment_Failure.xlsx'

# # Export the DataFrame to an Excel file
# df.to_excel(excel_file, index=False)


# In[17]:


df1=pd.read_excel("Equipment_Failure.xlsx")
data_with_noise=df1.values
data_with_noise=data_with_noise.flatten()


# In[18]:


print(data_with_noise)


# ## Step 2:Fitting all available probability distributions to the data

# In[19]:


results=Fit_Everything(failures=data_with_noise)


# In[16]:


results.probability_plot


# In[20]:


results.best_distribution_probability_plot


# ## Step 3: Fetching the best distribution and all the best paarmeters of that distribution, and its plot

# In[63]:


# Get the best distribution name
best_distribution_name = results.best_distribution_name
best_params =  results.best_distribution.parameters

# # Get the parameters of the best distribution
# best_distribution = results.distribution_instances[best_distribution_name]
# best_params = results.get_best_parameters(best_distribution_name)

# Print the best distribution and its parameters
print('Best Distribution:', best_distribution_name)
print('Best Parameters:', best_params)

results.best_distribution_probability_plot

# output2=results.probability_plot


# ## Step3: Conducting statistical-tests to check if the data is generated from same distribution

# In[22]:


wb=Fit_Weibull_2P(failures=data_with_noise)
KStest(distribution=wb.distribution,data=data_with_noise)


# ## Step4: Finding the optimal number of days for preventive maintenance

# In[65]:


t=optimal_replacement_time(cost_PM=12575,cost_CM=84300,weibull_alpha=232.69,weibull_beta=1.45,q=0)


# In[66]:


t.min_cost


# In[67]:


t.ORT


# In[ ]:




