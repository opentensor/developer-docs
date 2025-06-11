Building and Publishing Bittensor Python Reference Docs with Sphinx
Install virtual env

python3 -m venv sphinx_venv  
source sphinx_venv/bin/activate

Install Sphinx and the required extensions

Download this "sphinx-starter.tar" file: https://drive.google.com/file/d/192MweEv_M4uonylOypQh8tCrO4yjLETP/view?usp=drive_link I made this file to simplify the Sphinx installation and set up so you can get to building the docs quickly.
Do a "tar xvf sphinx-starter.tar" in a new directory. This will extract three files and a directory, i.e., “Makefile”, “make.bat” and “requirements.txt” files, and a "source" directory.
Run "pip install -r requirements.txt". This will install Sphinx and the required extensions.
Build docs locally

In the "source/conf.py" file, change line 67 (autoapi_dirs = ["/Users/rajkaramchedu/2scratch/bittensor/bittensor"]) and put in the path to your local Bittensor clone repo.
Also on line 28 of “source/conf.py”, put in your path for Python site-packages.
Run "make html". This will create a "build" directory and place reference html docs in it.
Open the docs with the command: open build/html/index.html and you will see all the reference docs, exactly like how the published version looks like, including CSS customizations.
When you edit a docstring in the Bittensor repo, run this command to delete old stuff and rebuild html: rm -r build && make html This will make sure the "build" directory is removed before rebuilding the docs, or else it will use the old stuff in the "build" directory, and we don't want that.
In the “source” directory, there are separate “index.rst” files for Wallet SDK, Bittensor SDK and for legacy docs. If you are generating Wallet API docs, then copy over the “index.rst.btwallet” into “index.rst” before you build the docs.
When you are ready to publish the docs, proceed to the below next step.

Publish the docs

To publish the docs on docs.bittensor.com, you will push the entire "build/html" directory into the docs repo. However, before you do that, remove the `html/_sources` directory. This directory contains reStructuredText source files and we don't want to version control them. So, do rm -r build/html/\_sources first.
In the docs repo, https://github.com/latent-to/developer-docs/tree/main , this "html" directory is located in the "developer-docs/python-api" path. Always replace the entire "html" directory even if you updated a single word or letter in a docstring.
In the Markdown file that contains links to these Python reference docs and sections, you will use "pathname:///python-api/html/index.html" for linking to the homepage of the Python ref docs. See "docs/bt-api-ref.md" for examples.

Conf.py

The "source/conf.py" is where all the configuration for docs generation is defined.
See Sphinx website here: https://www.sphinx-doc.org/en/master/index.html
We use Sphinx AutoAPI extension for docstrings to html generation. See the docs for the extension here: https://sphinx-autoapi.readthedocs.io/en/latest/reference/config.html
We use Sphinx Book Theme with additional custom CSS tweaks. Our custom CSS file is located in the `source/_static` directory. The Sphinx Book Theme docs are in https://sphinx-book-theme.readthedocs.io/en/stable/tutorials/get-started.html
Finally, we use Google style for docstrings. See the description here: https://github.com/latent-to/developer-docs/blob/main/WRITING-STYLE-GUIDE.md#python-docstrings

That's it. Happy documenting.
